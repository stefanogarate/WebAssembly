FROM webassembly/toolchain:latest


RUN set -x \
    && cd /root \
    && git clone https://github.com/WebAssembly/binaryen \
    && cd binaryen \
    && cmake . \
    && make 

ENV PATH="/root/binaryen/bin:${PATH}"