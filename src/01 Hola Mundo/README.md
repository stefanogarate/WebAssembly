# Hola Mundo

Simple ejemplo que muestra un texto en el navegador, escrito en C


### Build
```
$ emcc hola.c -s WASM=1 -o holis.html
```

### Run
```
$ emrun --no_browser --port 80 --hostname 0.0.0.0 .
```

### See

http://localhost:88/holis.html