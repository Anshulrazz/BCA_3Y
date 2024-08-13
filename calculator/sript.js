let a = document.getElementById("num1");
let b = document.getElementById("num2");
let result = document.getElementById("result");

function greet() {
    document.write("Happy Indpendence Day"); 
}
greet();
function add() {
    result.innerHTML = parseInt(a.value) + parseInt(b.value);
}

function sub() {
    result.innerHTML = parseInt(a.value) - parseInt(b.value);
}

function mul() {
    result.innerHTML = parseInt(a.value) * parseInt(b.value);
}

function div() {
    result.innerHTML = parseInt(a.value) / parseInt(b.value);
}

console.log(result);