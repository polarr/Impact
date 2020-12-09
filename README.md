# LegendGL

A small WebGL boilerplate library, made in `March 2020` by `1egend`

Documentation:<br>
`function initGL(id x)`<br>
Returns the WebGL context/environment in the canvas element with id=`x`.<br><br>
`function createShader(gl.SHADER type, id source)`<br>
Creates and returns a `type = gl.VERTEX_SHADER/gl.FRAGMENT_SHADER` shader with the source text code in the non-js script with id=`source`<br><br>
`function createProgram(gl.createShader vts, gl.createShader fts)`<br>
Creates and returns a program with attached vertex and fragment shaders: `vtx`, `ftx` (gl.createShader)s<br><br>
`void resize(id canvas, float w, float h, bool sq)`<br>
Resizes the canvas with id=`canvas`. `w, h` are optional inputs. If omitted, `w, h` will be set to `window.innerWidth, window.innerHeight`. If `sq = true`, then it will resize the canvas to a square with side length `min(w, h)`.
