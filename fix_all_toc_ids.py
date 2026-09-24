def fix_toc_ids():
    # 1. In high-concurrency-java.html, ensure both #lmax-disruptor and #disruptor-internals exist
    with open('high-concurrency-java.html', 'r', encoding='utf-8') as f:
        hc = f.read()

    # Find Disruptor header and give it id="lmax-disruptor" and id="disruptor-internals"
    if 'id="lmax-disruptor"' not in hc:
        hc = hc.replace('<h3>The LMAX Disruptor', '<article class="content-article" id="lmax-disruptor"><div id="disruptor-internals"></div><h3>The LMAX Disruptor')
    else:
        if 'id="disruptor-internals"' not in hc:
            hc = hc.replace('id="lmax-disruptor"', 'id="lmax-disruptor"><div id="disruptor-internals"></div>')

    with open('high-concurrency-java.html', 'w', encoding='utf-8') as f:
        f.write(hc)
    print("Fixed high-concurrency-java.html TOC ID.")

    # 2. In enterprise-scss.html, let's see why those IDs were missing:
    with open('enterprise-scss.html', 'r', encoding='utf-8') as f:
        scss = f.read()

    # Check headings and inject matching IDs
    mappings = [
        ('ch5-control-flow', ['5.4 Control Flow', 'Control Flow Directives']),
        ('ch6-adapting-7-1', ['6.2 Adapting 7-1', 'Adapting 7-1']),
        ('ch6-component-driven', ['6.4 Component-Driven', 'Component-Driven Architecture']),
        ('ch7-post-processing', ['7.3 Post-Processing', 'Post-Processing and Linting']),
        ('ch7-source-maps', ['7.4 Source Maps', 'Source Maps and Production Debugging']),
        ('ch8-bloat-mechanics', ['8.2 Mechanics of CSS Bloat', 'Mechanics of CSS Bloat']),
        ('ch8-bundle-optimization', ['8.3 Bundle Optimization', 'Bundle Optimization Strategies']),
        ('ch8-auditing-guardrails', ['8.4 Automated CSS Auditing', 'Automated CSS Auditing']),
        ('ch9-hybrid-model', ['9.2 The Hybrid Coexistence', 'The Hybrid Coexistence Model']),
        ('ch10-refactoring-playbook', ['10.2 Step-by-Step Refactoring', 'Step-by-Step Refactoring'])
    ]

    for id_val, search_terms in mappings:
        if f'id="{id_val}"' not in scss:
            for term in search_terms:
                if term in scss:
                    # wrap with an article or inject id before term
                    scss = scss.replace(term, f'<span id="{id_val}"></span>' + term, 1)
                    print(f"Injected id={id_val} for term '{term}'")
                    break

    with open('enterprise-scss.html', 'w', encoding='utf-8') as f:
        f.write(scss)
    print("Fixed enterprise-scss.html TOC IDs.")

if __name__ == '__main__':
    fix_toc_ids()
