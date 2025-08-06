function add(){
    // alert("Hello")
    let a = document.getElementById("n1").value
    // alert(a)
    let b = document.getElementById("n2").value
    // alert(b)
    let c = parseFloat(a) + parseFloat(b)
    document.getElementById("res").value=c
}
function sub(){
    let a = document.getElementById("n1").value
    let b = document.getElementById("n2").value
    let c = parseFloat(a) - parseFloat(b)
    document.getElementById("res").value=c
}
function mul(){
    let a = document.getElementById("n1").value
    let b = document.getElementById("n2").value
    let c = parseFloat(a) * parseFloat(b)
    document.getElementById("res").value=c
}
function div(){
    let a = document.getElementById("n1").value
    let b = document.getElementById("n2").value
    let c = parseFloat(a) / parseFloat(b)
    document.getElementById("res").value=c
}
function mod(){
    let a = document.getElementById("n1").value
    let b = document.getElementById("n2").value
    let c = parseFloat(a) % parseFloat(b)
    document.getElementById("res").value=c
}
function fact(){
    let a = parseFloat(document.getElementById("n1").value)
    let fact = 1;
    for (let i = 1; i <= a; i++) {
        fact *=i;
    }
    document.getElementById("res").value=fact
    document.getElementById("n2").placeholder = "Not Required"
}
function inv(){
    let a = parseFloat(document.getElementById("n1").value)
    let inv = 1/a;
    document.getElementById("res").value=inv
    document.getElementById("n2").placeholder = "Not Required"
}
function sqr(){
    let a = parseFloat(document.getElementById("n1").value)
    let sqr = a*a;
    document.getElementById("res").value=sqr
    document.getElementById("n2").placeholder = "Not Required"
}
function cube(){
    let a = parseFloat(document.getElementById("n1").value)
    let cube = a**3;
    document.getElementById("res").value=cube
    document.getElementById("n2").placeholder = "Not Required"
}
function pow(){
    let a = parseFloat(document.getElementById("n1").value)
    let b = parseFloat(document.getElementById("n2").value)
    let pow = a**b;
    document.getElementById("res").value=pow
}
function sqrt(){
    let a = parseFloat(document.getElementById("n1").value)
    let sqrt = Math.sqrt(a);
    document.getElementById("res").value=sqrt
    document.getElementById("n2").placeholder = "Not Required"
}
function cubert(){
    let a = parseFloat(document.getElementById("n1").value)
    let cubert = Math.cbrt(a);
    document.getElementById("res").value=cubert
    document.getElementById("n2").placeholder = "Not Required"
}
function root(){
    let a = parseFloat(document.getElementById("n1").value)
    let b = parseFloat(document.getElementById("n2").value)
    let root = a**(1/b);
    document.getElementById("res").value=root
}
function log(){
    let a = parseFloat(document.getElementById("n1").value)
    let log = Math.log(a)/Math.log(10);
    document.getElementById("res").value=log
    document.getElementById("n2").placeholder = "Not Required"
}
function ln(){
    let a = parseFloat(document.getElementById("n1").value)
    let ln = Math.log(a);
    document.getElementById("res").value=ln
    document.getElementById("n2").placeholder = "Not Required"
}
function pow10(){
    let a = parseFloat(document.getElementById("n1").value)
    let pow10 = 10**a;
    document.getElementById("res").value=pow10
    document.getElementById("n2").placeholder = "Not Required"
}
function sin(){
    let a = parseFloat(document.getElementById("n1").value)
    let rad = a * (Math.PI/180)
    let sin = Math.sin(rad);
    document.getElementById("res").value=sin
    document.getElementById("n2").placeholder = "Not Required"
}
function tan(){
    let a = parseFloat(document.getElementById("n1").value)
    let rad = a * (Math.PI/180)
    let tan = Math.tan(rad);
    document.getElementById("res").value=tan
    document.getElementById("n2").placeholder = "Not Required"
}
function cos(){
    let a = parseFloat(document.getElementById("n1").value)
    let rad = a * (Math.PI/180)
    let cos = Math.cos(rad);
    document.getElementById("res").value=cos
    document.getElementById("n2").placeholder = "Not Required"
}