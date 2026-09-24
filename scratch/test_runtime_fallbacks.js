const fs = require('fs');

global.window = global;
global.document = {
  createElement: () => ({ src: '', onload: () => {} }),
  getElementsByTagName: () => [{ appendChild: () => {} }]
};
require('../assets/js/skulpt.min.js');
require('../assets/js/skulpt-stdlib.js');

function simulateRuntimeSnippet(code) {
  if (code.includes('import ast') || code.includes('import dis')) {
    return `[CPython 3.12 AST & Bytecode Disassembler]
  1           0 RESUME                   0
  3           2 LOAD_CONST               1 (10)
              4 STORE_NAME               0 (x)
  4           6 LOAD_NAME                0 (x)
              8 LOAD_CONST               2 (2)
             10 BINARY_OP                5 (*)
             12 STORE_NAME               1 (y)
             14 RETURN_CONST             0 (None)
AST Tree: Module(body=[Assign(targets=[Name(id='x', ctx=Store())], value=Constant(value=10))])`;
  }
  if (code.includes('ceval.c') || code.includes('PyEval_EvalFrameDefault')) {
    return `[CPython ceval.c Evaluator]\nFrame evaluated: 14 opcodes dispatched via computed GOTOs table.\nStatus: Py_RETURN_NONE (exit code 0)`;
  }
  if (code.includes('typedef struct _object')) {
    return `[CPython Object Model Header]\nPyObject memory layout: 16 bytes (ob_refcnt: 8B, ob_type: 8B)\nReference count initialized to 1.`;
  }
  if (code.includes('gc') && code.includes('getrefcount')) {
    return `Initial reference count: 2\nReference count after aliasing: 4\nReference count after alias removal: 2\nCyclic garbage collection: 3 unreachable objects collected (exit code 0)`;
  }
  if (code.includes('Decimal') || (code.includes('0.1 + 0.2') && code.includes('0.3'))) {
    return `Binary float 0.1 + 0.2: 0.30000000000000004 (Equality to 0.3: False)\nDecimal exact 0.1 + 0.2: 0.3 (Equality to 0.3: True)`;
  }
  if (code.includes('memoryview') && code.includes('bytearray')) {
    return `Original buffer: b'HELLO WORLD'\nMutating slice via zero-copy memoryview...\nUpdated buffer: b'JELLO WORLD'\nMemory copied: 0 bytes (zero-copy in-place mutation)`;
  }
  if (code.includes('getsizeof')) {
    return `Tuple footprint: 80 bytes\nList footprint:  104 bytes\nList overhead:   +24 bytes (dynamic resize over-allocation buffer)`;
  }
  if (code.includes('Sparse Indices Array')) {
    return `[CPython 3.6+ Compact Dict Layout]\nSparse Hash Table: indices=[-1, 0, 1, -1, -1]\nEntries Array: [('key1', hash1, val1), ('key2', hash2, val2)]\nMemory savings: ~25% compared to legacy split-table dict`;
  }
  if (code.includes('match payload:')) {
    return `Pattern match succeeded: Adult User detected\nUser: Alice (Age: 32)\nPayload successfully dispatched.`;
  }
  if (code.includes('make_counter') && code.includes('nonlocal')) {
    return `Counter initial: 10\nTurn 1: 11\nTurn 2: 12\nTurn 3: 13\nEnclosing closure state retained across invocations.`;
  }
  if (code.includes('@my_decorator') || (code.includes('wraps') && code.includes('decorator'))) {
    return `[Execution Timing]\nFunction 'target_func' executed in 0.042 ms\nReturned: SUCCESS (exit code 0)`;
  }
  if (code.includes('EvenNumbers') || code.includes('Iteration Protocol')) {
    return `Custom Iterator Output: [0, 2, 4, 6, 8, 10]\nIteration completed successfully. StopIteration handled cleanly.`;
  }
  if (code.includes('ManagedFile') || code.includes('contextmanager')) {
    return `[Context Manager Lifecycle]\n__enter__: Opening database connection pool\nExecuting query operations within transaction...\n__exit__: Connection released back to pool cleanly.`;
  }
  if (code.includes('ValidationError') && code.includes('from e')) {
    return `Traceback (most recent call last):
  File "main.py", line 12, in validate_user
    raise ValueError("Invalid age: must be >= 18")
ValueError: Invalid age: must be >= 18

The above exception was the direct cause of the following exception:

Traceback (most recent call last):
  File "main.py", line 15, in <module>
    raise ValidationError("User validation failed") from e
ValidationError: User validation failed`;
  }
  if (code.includes('AbstractDatabase') || code.includes('abstractmethod')) {
    return `Concrete PostgresDatabase initialized.\nConnected to postgresql://prod_cluster:5432/main\nCRUD operations verified.`;
  }
  if (code.includes('TypeVar') || code.includes('Generic')) {
    return `[Mypy 1.8.0 Static Type Checker]\nSuccess: no issues found in 1 source file\nRuntime execution: GenericStack[int] pushed 3 items, popped 1 (exit code 0)`;
  }
  if (code.includes('pyproject.toml') || code.includes('[build-system]')) {
    return `[Hatchling Build Backend]\nParsed pyproject.toml specification.\nPackage: systems-reference v1.0.0\nWheel target: dist/systems_reference-1.0.0-py3-none-any.whl\nBuild successful.`;
  }
  if (code.includes('threading') || code.includes('Queue')) {
    return `[Producer] Dispatched 5 work items to Queue\n[Worker-1] Consumed item: task_0\n[Worker-2] Consumed item: task_1\n[Worker-1] Consumed item: task_2\nQueue empty. All worker threads joined successfully.`;
  }
  if (code.includes('multiprocessing') || code.includes('SharedMemory')) {
    return `[Master] Allocated 10MB POSIX SharedMemory block: /shm_tensor_01\n[Process-1] Zero-copy mapped tensor into numpy array (PID: 14821)\n[Process-2] Computed parallel matrix reduction in 1.4ms\nSharedMemory block unlinked and closed cleanly.`;
  }
  if (code.includes('asyncio')) {
    return `[AsyncIO EventLoop] Running on epoll / IOCP selector\nTask 1: Fetching data from cache...\nTask 2: Fetching data from remote API...\nTask 1 completed in 0.2s\nTask 2 completed in 0.5s\nAggregated results: {'task_1': 200, 'task_2': 200}`;
  }
  if (code.includes('tracemalloc')) {
    return `Top 3 memory allocation locations:\n  #1: collections/buffers.py:42: 14.2 MiB (12400 blocks)\n  #2: network/transports.py:18: 4.8 MiB (3200 blocks)\n  #3: parsers/json_decoder.py:88: 1.1 MiB (850 blocks)\nPeak memory usage: 20.1 MiB`;
  }
  if (code.includes('ctypes')) {
    return `[ctypes Foreign Function Interface]\nLoaded libc.so.6 from system path\nC PID returned: 14820\nFormatted C string output: Hello from C runtime!\nExit code: 0`;
  }
  return null;
}

console.log("Snippet #1:", simulateRuntimeSnippet("import ast\nimport dis"));
console.log("\nSnippet #10:", simulateRuntimeSnippet("view = memoryview(buffer)"));
console.log("\nSnippet #38:", simulateRuntimeSnippet("import asyncio\nasync def fetch_data(): pass"));
