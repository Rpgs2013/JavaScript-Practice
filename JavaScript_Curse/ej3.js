var pass = "";
let showMessage = prompt("Introduce el nombre completo de una persona: ");
var arrPass = showMessage.split(" ");
pass += arrPass[0].substring(0, 3);
pass += arrPass[1].slice(-3);
pass += arrPass[2].length;

console.log("Contraseña: " + pass);

do {
    var num = parseInt(prompt('Introduzca un número del 1 al 6' , 2));
} while(num > 6 || num < 1 || isNaN(num));

var mayus = pass.toLocaleUpperCase();

for(var i = 1; i <= num; i++) {
    document.write("<h" + i + ">" + mayus + "<h" + i + ">");
}

