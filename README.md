# LegendGL

A lightweight WebGL boilerplate library, made in `March, 2020` by [1egend](https://1e9end.github.io)<br>

### Installation
jsDelivr CDN: https://cdn.jsdelivr.net/gh/1e9end/LegendGL/1.0.js
```
<script src = "https://cdn.jsdelivr.net/gh/1e9end/LegendGL/1.0.js"></script>
// rest of code...
```


---
## Documentation:
`function initGL(string x)` <br />
Returns the WebGL context/environment in the canvas element with id=`x`. 
<br /> <br />
`function createShader(type, string source)` <br />
Creates and returns a `type = gl.VERTEX_SHADER/gl.FRAGMENT_SHADER` shader with the source text code in the non-js script with id=`source` 
<br /> <br />
`function createProgram(vts, fts)` <br /> 
Creates and returns a program with attached vertex and fragment shaders: `vtx`, `ftx` (gl.createShader)s <br /> <br />
`void resize(string canvas, float w, float h, bool sq)` <br /> 
Resizes the canvas with id=`canvas`. `w, h` are optional inputs. If omitted, `w, h` will be set to `window.innerWidth, window.innerHeight`. If `sq = true`, then it will resize the canvas to a square with side length `min(w, h)`.

---
### License

Copyright © 2020 1egend (1e9end)

Licensed under the GPL-3.0 license, see [LICENSE](LICENSE) for details.
