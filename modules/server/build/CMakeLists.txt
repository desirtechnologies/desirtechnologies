cmake_minimum_required(VERSION 3.13)
project(racket_wasm)

set(CMAKE_C_COMPILER "emcc")
set(CMAKE_CXX_COMPILER "em++")

add_executable(racket_wasm main.c)
set_target_properties(racket_wasm PROPERTIES
    SUFFIX ".js"
    LINK_FLAGS "-s WASM=1 -s EXPORTED_FUNCTIONS='[\"_add\"]' -s EXPORTED_RUNTIME_METHODS='[\"ccall\",\"cwrap\"]'"
)