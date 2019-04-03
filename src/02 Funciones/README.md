# Funciones

Ejemplo de uso de funciones, escrito en C

### Build
```
$ emcc cuadrado.c -Os -s WASM=1 -s SIDE_MODULE=1 -o cuadrado.wasm
```

### Run
```
$ emrun --no_browser --port 80 --hostname 0.0.0.0 .
```

### See

http://localhost:88/index.html