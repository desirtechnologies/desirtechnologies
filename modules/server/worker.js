importScripts('racket_wasm.js');

let wasmReady = false;

Module.onRuntimeInitialized = () => {
  wasmReady = true;
  postMessage({ type: 'ready' });
};

self.onmessage = function(e) {
  if (!wasmReady) return;
  
  const { func, args, id } = e.data;
  
  try {
    const result = Module.ccall(
      func,  // function name
      'number',  // return type
      ['number', 'number'],  // argument types
      args  // arguments
    );
    postMessage({ id, result });
  } catch (error) {
    postMessage({ id, error: error.message });
  }
};