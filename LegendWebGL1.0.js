var gl;
var initgl = function(canvas){
    var c = document.getElementById(canvas);
    if (!c || c.tagName !== "CANVAS"){
        throw new Error("Invalid canvas id or id tag");
    }
    var gl = c.getContext("webgl");

    if (!gl){
        throw new Error("WebGL not supported, try better browser");
    }

    return gl;
}

var createShader = function(type, source){
    var shader = gl.createShader(type);
    gl.shaderSource(shader, document.getElementById(source).text);
    gl.compileShader(shader);
    var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);  

    if (success){
        console.log("Successfully created shader of type " + (type === gl.VERTEX_SHADER ? "vertex shader" : "fragment shader"));
        return shader;
    }

    console.log(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    throw new Error("Failed to compile shader");
}

var createProgram = function(vts, fts){
    var program = gl.createProgram();
    console.log("Attaching shaders...");
    gl.attachShader(program, createShader(gl.VERTEX_SHADER, vts));
    console.log("Successfully attached vertex shader with source "  + gl.getShaderSource(createShader(gl.VERTEX_SHADER, vts)));
    gl.attachShader(program, createShader(gl.FRAGMENT_SHADER, fts));
    console.log("Successfully attached fragment shader with source "  + gl.getShaderSource(createShader(gl.FRAGMENT_SHADER, fts)));
    gl.linkProgram(program);
    var success = gl.getProgramParameter(program, gl.LINK_STATUS);
    
    if (success){
        console.log("Sucessfully created program");
        return program;
    }

    console.log("Failed to create program")
    console.log(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
}

// Rendering 
function resize(canvas, square) {
    var displayWidth  = canvas.clientWidth; 
    var displayHeight = canvas.clientHeight;

    if (square){
        var display = Math.min(displayWidth, displayHeight);

        if (canvas.width  != display ||
            canvas.height != display) {
            canvas.width  = display;
            canvas.height = display;
        }
    }
    else{
        if (canvas.width  != displayWidth ||
            canvas.height != displayHeight) {
            canvas.width  = displayWidth;
            canvas.height = displayHeight;
        }
    }

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
};
