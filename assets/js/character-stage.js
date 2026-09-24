/**
 * Systems Architecture Reference Library - Full-Screen 3D WebGL Shader Background Engine
 * Immersive WebGL Experience:
 * - High-segment PlaneGeometry (128x128) with Custom GLSL Shaders
 * - Vertex Shader: 3D cursor displacement bulge & wave ripple in Z-axis
 * - Fragment Shader: Mouse velocity-driven Chromatic Aberration (RGB split) & Noise Dissolve
 * - Scroll-linked dynamic texture transitions between Blue Box artwork
 * - Zero pointer interference: pointer-events: none on canvas, 100% text & code accessibility
 * - Bulletproof texture loading with explicit onLoad and onError callbacks
 * - High-visibility bright magenta debug fallback inside the fragment shader
 * - Automatic frame throttling (pauses when tab hidden) & prefers-reduced-motion safety
 */

(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // 1. Ensure Three.js is loaded
  function loadThree(callback) {
    if (window.THREE) {
      return callback();
    }
    const script = document.createElement("script");
    script.src = "assets/js/three.min.js";
    script.onload = () => callback();
    script.onerror = () => {
      const cdnScript = document.createElement("script");
      cdnScript.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
      cdnScript.onload = () => callback();
      document.head.appendChild(cdnScript);
    };
    document.head.appendChild(script);
  }

  // 2. Custom GLSL Shaders
  const vertexShader = `
    varying vec2 vUv;
    varying float vElevation;
    uniform float u_time;
    uniform vec2 u_mouse;
    uniform float u_velocity;
    uniform vec2 u_resolution;
    uniform float u_reduced_motion;

    void main() {
      vUv = uv;
      vec3 pos = position;

      if (u_reduced_motion < 0.5) {
        // Aspect-corrected distance from vertex UV to normalized mouse coordinates [0, 1]
        vec2 aspectUv = uv;
        vec2 aspectMouse = u_mouse;
        aspectUv.x *= (u_resolution.x / u_resolution.y);
        aspectMouse.x *= (u_resolution.x / u_resolution.y);

        float dist = distance(aspectUv, aspectMouse);
        float maxRadius = 0.36;

        // Localized 3D Z-bulge with organic wave ripples
        float influence = smoothstep(maxRadius, 0.0, dist);
        float wave = sin(dist * 30.0 - u_time * 3.5) * 0.5 + 0.5;
        float elevation = influence * (0.8 + u_velocity * 2.2) * (0.85 + 0.15 * wave);

        pos.z += elevation;
        vElevation = elevation;
      } else {
        vElevation = 0.0;
      }

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  const fragmentShader = `
    uniform sampler2D u_textureA;
    uniform sampler2D u_textureB;
    uniform sampler2D uTexture;
    uniform float u_textureLoaded;
    uniform float u_blend;
    uniform float u_velocity;
    uniform float u_time;
    uniform vec2 u_mouse;
    uniform float u_reduced_motion;
    varying vec2 vUv;
    varying float vElevation;

    // Organic procedural noise for dissolve transitions
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(
        mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
        mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
        u.y
      );
    }

    void main() {
      // 3. Visible Debug Fallback:
      // If texture fails to load (or is loading), default to bright magenta vec3(1.0, 0.0, 1.0).
      // This immediately confirms the WebGL canvas is running and the shader is active.
      if (u_textureLoaded < 0.5) {
        gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
        return;
      }

      vec2 uv = vUv;

      // Chromatic Aberration vector scaling with mouse velocity & vertex elevation
      float aberration = 0.0;
      vec2 dir = vec2(0.0);

      if (u_reduced_motion < 0.5) {
        dir = normalize(uv - u_mouse + vec2(0.0001));
        aberration = clamp(u_velocity * 0.038 + vElevation * 0.016, 0.0, 0.055);
      }

      // Sample texture A with liquid RGB chromatic aberration
      float rA = texture2D(u_textureA, uv + dir * aberration).r;
      float gA = texture2D(u_textureA, uv).g;
      float bA = texture2D(u_textureA, uv - dir * aberration).b;
      vec4 colA = vec4(rA, gA, bA, 1.0);

      // Sample texture B with liquid RGB chromatic aberration
      float rB = texture2D(u_textureB, uv + dir * aberration).r;
      float gB = texture2D(u_textureB, uv).g;
      float bB = texture2D(u_textureB, uv - dir * aberration).b;
      vec4 colB = vec4(rB, gB, bB, 1.0);

      // Noise dissolve wipe transition between textures
      float n = noise(uv * 7.0 + u_time * 0.15);
      float wipe = smoothstep(0.0, 1.0, (u_blend * 1.3 - n * 0.3));
      wipe = clamp(wipe, 0.0, 1.0);

      vec4 finalColor = mix(colA, colB, wipe);

      // Soft ambient vignette to enhance text contrast at edges
      vec2 centerOffset = uv - vec2(0.5);
      float vignette = 1.0 - dot(centerOffset, centerOffset) * 0.75;
      vignette = clamp(vignette, 0.45, 1.0);
      finalColor.rgb *= vignette;

      // Subtle atmospheric grading for optimal contrast with frosted glass cards
      vec3 deepBackdrop = vec3(0.06, 0.09, 0.15);
      finalColor.rgb = mix(deepBackdrop, finalColor.rgb, 0.85 + vElevation * 0.15);

      gl_FragColor = finalColor;
    }
  `;

  // 3. Main Full-Screen WebGL Background Controller
  function initFullScreenWebGLBackground() {
    let canvas = document.getElementById("webgl-bg");
    if (!canvas) {
      canvas = document.createElement("canvas");
      canvas.id = "webgl-bg";
      canvas.style.position = "fixed";
      canvas.style.top = "0";
      canvas.style.left = "0";
      canvas.style.width = "100vw";
      canvas.style.height = "100vh";
      canvas.style.zIndex = "-1";
      canvas.style.pointerEvents = "none";
      canvas.style.display = "block";
      document.body.prepend(canvas);
    }

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Scene & Perspective Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    // Calculate plane dimensions at z=0 to perfectly cover camera view
    function getPlaneDimensions() {
      const vFov = (camera.fov * Math.PI) / 180;
      const visibleHeight = 2 * Math.tan(vFov / 2) * camera.position.z;
      const visibleWidth = visibleHeight * camera.aspect;
      return { width: visibleWidth, height: visibleHeight };
    }

    const dims = getPlaneDimensions();

    // High-Density Geometry for 3D Vertex Bulge (128x128 segments)
    const geometry = new THREE.PlaneGeometry(dims.width, dims.height, 128, 128);

    // Initial 1x1 Magenta Canvas Texture (ensures samplers are valid while loading)
    function createInitialTexture() {
      const c = document.createElement("canvas");
      c.width = 1;
      c.height = 1;
      const ctx = c.getContext("2d");
      ctx.fillStyle = "#ff00ff";
      ctx.fillRect(0, 0, 1, 1);
      const tex = new THREE.CanvasTexture(c);
      tex.minFilter = THREE.NearestFilter;
      tex.magFilter = THREE.NearestFilter;
      return tex;
    }

    const initialTex = createInitialTexture();

    // Shader Uniforms
    const uniforms = {
      u_time: { value: 0 },
      u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
      u_velocity: { value: 0.0 },
      u_resolution: { value: new THREE.Vector2(width, height) },
      u_textureA: { value: initialTex },
      u_textureB: { value: initialTex },
      uTexture: { value: initialTex },
      u_textureLoaded: { value: 0.0 }, // 0.0 = bright magenta fallback; 1.0 = loaded artwork
      u_blend: { value: 0.0 },
      u_reduced_motion: { value: prefersReducedMotion ? 1.0 : 0.0 }
    };

    const shaderMaterial = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: uniforms,
      side: THREE.DoubleSide
    });

    const mesh = new THREE.Mesh(geometry, shaderMaterial);
    scene.add(mesh);

    // 4. Bulletproof Texture Loading Pipeline
    const textureLoader = new THREE.TextureLoader();
    const imagePaths = [
      "assets/images/chinatsu-hero.png",
      "assets/images/sports-duo.png",
      "assets/images/color-hug.png",
      "assets/images/manga-hug.png"
    ];

    const loadedTextures = [];

    imagePaths.forEach((path, index) => {
      textureLoader.load(
        path,
        function (texture) {
          texture.minFilter = THREE.LinearFilter;
          texture.magFilter = THREE.LinearFilter;
          texture.wrapS = THREE.ClampToEdgeWrapping;
          texture.wrapT = THREE.ClampToEdgeWrapping;
          loadedTextures[index] = texture;

          console.log(`[WebGL Background] Successfully loaded texture [${index}]: ${path}`);

          if (index === 0) {
            shaderMaterial.uniforms.u_textureA.value = texture;
            shaderMaterial.uniforms.uTexture.value = texture;
            if (!loadedTextures[1]) {
              shaderMaterial.uniforms.u_textureB.value = texture;
            }
            // Artwork successfully loaded: switch away from magenta fallback
            shaderMaterial.uniforms.u_textureLoaded.value = 1.0;
          } else if (index === 1 && !loadedTextures[0]) {
            shaderMaterial.uniforms.u_textureB.value = texture;
          }
        },
        undefined,
        function (err) {
          console.error("Texture failed to load. Check path:", err, path);

          // Fallback attempt: try corresponding .jpg if .png failed
          if (path.endsWith(".png")) {
            const jpgPath = path.replace(".png", ".jpg");
            textureLoader.load(
              jpgPath,
              function (jpgTex) {
                jpgTex.minFilter = THREE.LinearFilter;
                jpgTex.magFilter = THREE.LinearFilter;
                jpgTex.wrapS = THREE.ClampToEdgeWrapping;
                jpgTex.wrapT = THREE.ClampToEdgeWrapping;
                loadedTextures[index] = jpgTex;
                console.log(`[WebGL Background] Successfully loaded fallback JPG [${index}]: ${jpgPath}`);

                if (index === 0) {
                  shaderMaterial.uniforms.u_textureA.value = jpgTex;
                  shaderMaterial.uniforms.uTexture.value = jpgTex;
                  shaderMaterial.uniforms.u_textureLoaded.value = 1.0;
                }
              },
              undefined,
              function (jpgErr) {
                console.error("Texture failed to load. Check path:", jpgErr, jpgPath);
                // Remains in bright magenta debug color vec3(1.0, 0.0, 1.0)
              }
            );
          }
        }
      );
    });

    // Mouse Tracking & Velocity Computation
    let targetMouseX = 0.5;
    let targetMouseY = 0.5;
    let currentMouseX = 0.5;
    let currentMouseY = 0.5;

    let lastMouseClientX = window.innerWidth / 2;
    let lastMouseClientY = window.innerHeight / 2;
    let mouseVelocity = 0;
    let targetVelocity = 0;

    let mouseMoveTimer = null;

    window.addEventListener("mousemove", (e) => {
      // Convert to normalized UV coordinates [0.0 to 1.0] with inverted Y for WebGL UV space
      targetMouseX = e.clientX / window.innerWidth;
      targetMouseY = 1.0 - (e.clientY / window.innerHeight);

      // Compute physical mouse displacement distance for velocity
      const dX = e.clientX - lastMouseClientX;
      const dY = e.clientY - lastMouseClientY;
      lastMouseClientX = e.clientX;
      lastMouseClientY = e.clientY;

      const speed = Math.sqrt(dX * dX + dY * dY);
      targetVelocity = Math.min(1.0, speed * 0.022);

      clearTimeout(mouseMoveTimer);
      mouseMoveTimer = setTimeout(() => {
        targetVelocity = 0;
      }, 50);
    }, { passive: true });

    // Scroll-Linked Scene Transitions
    let scrollProgress = 0;
    let targetBlend = 0;

    function onScroll() {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress = maxScroll > 0 ? (window.scrollY / maxScroll) : 0;

      // Map scroll progress across the 4 artwork phases:
      // Phase 1: 0.00 - 0.33 -> Image 0 (chinatsu-hero) to Image 1 (sports-duo)
      // Phase 2: 0.33 - 0.66 -> Image 1 (sports-duo) to Image 2 (color-hug)
      // Phase 3: 0.66 - 1.00 -> Image 2 (color-hug) to Image 3 (manga-hug)
      const numSegments = 3;
      const scaled = scrollProgress * numSegments;
      const segIndex = Math.min(numSegments - 1, Math.floor(scaled));
      const segProgress = scaled - segIndex;

      const idxA = segIndex;
      const idxB = Math.min(imagePaths.length - 1, segIndex + 1);

      if (loadedTextures[idxA]) {
        shaderMaterial.uniforms.u_textureA.value = loadedTextures[idxA];
      }
      if (loadedTextures[idxB]) {
        shaderMaterial.uniforms.u_textureB.value = loadedTextures[idxB];
      }

      targetBlend = segProgress;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Window Resize Handler
    function onResize() {
      width = window.innerWidth;
      height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      const newDims = getPlaneDimensions();
      mesh.geometry.dispose();
      mesh.geometry = new THREE.PlaneGeometry(newDims.width, newDims.height, 128, 128);

      renderer.setSize(width, height);
      shaderMaterial.uniforms.u_resolution.value.set(width, height);
    }

    window.addEventListener("resize", onResize, { passive: true });

    // Animation Loop with Idle Throttling
    const clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);

      // Pause GPU loop when tab is hidden
      if (document.hidden) return;

      const elapsed = clock.getElapsedTime();
      shaderMaterial.uniforms.u_time.value = elapsed;

      // Smooth lerp mouse coordinates
      currentMouseX += (targetMouseX - currentMouseX) * 0.08;
      currentMouseY += (targetMouseY - currentMouseY) * 0.08;
      shaderMaterial.uniforms.u_mouse.value.set(currentMouseX, currentMouseY);

      // Smooth lerp mouse velocity
      mouseVelocity += (targetVelocity - mouseVelocity) * 0.08;
      shaderMaterial.uniforms.u_velocity.value = mouseVelocity;

      // Smooth lerp scroll transition blend
      shaderMaterial.uniforms.u_blend.value += (targetBlend - shaderMaterial.uniforms.u_blend.value) * 0.06;

      renderer.render(scene, camera);
    }

    animate();
  }

  // Auto-boot on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => loadThree(initFullScreenWebGLBackground));
  } else {
    loadThree(initFullScreenWebGLBackground);
  }
})();
