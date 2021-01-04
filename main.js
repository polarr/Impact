var gl;
function initGL(canvas){
    var c = document.getElementById(canvas);
    if (!c || c.tagName !== "CANVAS"){
        throw new Error("Invalid canvas ID or ID tag");
    }
    var gl = c.getContext("webgl", { preserveDrawingBuffer: true, antialias: false, premultipliedAlpha: false });

    if (!gl){
        throw new Error("Your browser does not support WebGL.");
    }
    return gl;
}

var createShader = function(type, source){
    var shader = gl.createShader(type);
    gl.shaderSource(shader, document.getElementById(source).text);
    gl.compileShader(shader);
    if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)){
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
    
    if (gl.getProgramParameter(program, gl.LINK_STATUS)){
        console.log("Sucessfully created program");
        return program;
    }

    console.log("Failed to create program")
    console.log(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
}

function resize(canvas, w, h, sq) {
    var W  = w || window.innerWidth;  
    var H = h || window.innerHeight;

    var SQ = Math.min(W, H);
    canvas.width = sq ? SQ:W;
    canvas.height = sq ? SQ:H;

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
};

function clearColor(){
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}
