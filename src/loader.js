function loadWebAssembly(filename, imports = {}) {
    return fetch(filename)
      .then(response => response.arrayBuffer())
      .then(buffer => WebAssembly.compile(buffer))
      .then(module => {
        imports.env = imports.env || {}
        Object.assign(imports.env, {
          memoryBase: 0,
          tableBase: 0,
          DYNAMICTOP_PTR: 0,
          tempDoublePtr: 0,
          ABORT: 0,
          memory: new WebAssembly.Memory({ initial: 256, maximum: 256 }),
          table: new WebAssembly.Table({ initial: 2, maximum: 8, element: 'anyfunc' }),
          abortStackOverflow: function (allocSize) { },
          nullFunc_X: function () { },
          abort: function () { }
        })
        return new WebAssembly.Instance(module, imports)
      })
  }
  
  function loadJS (url, imports = {}) {
    return fetch(url)
      .then(response => response.text())
      .then(code => new Function('imports', `return (${code})()`))
      .then(factory => ({ exports: factory(imports) }))
  }