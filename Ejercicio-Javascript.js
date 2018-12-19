FASE 1

var nombre = ["D","a","n","i","e","l"];
for (i=0; i<=nombre.length; i++){
    console.log(nombre[i])
}

FASE 2

var nombre = ["D","a","n","i","e","l"];
    for (var x=0; x<nombre.length; x++){
        if (nombre [x]==="a"|| nombre [x] ==="e"|| nombre [x]==="i"|| nombre [x]==="o"||nombre [x]==="u") {
            nombre [x] = 'Vocal';
        } else {
            nombre [x] = 'Consonante';
        }
    }
console.log(nombre);

FASE 3

var nombre = ["D","a","n","i","e","l"];
var cont = {};
for (var i=0; i < nombre.length; i++) {
  cont[nombre[i]] = (cont[nombre[i]] || 0) +1 ;
}
console.log(cont)

FASE 4

var nombre = ["D","a","n","i","e","l"];
var apellido = ["L","a","r","r","e","a"];
var espacio = nombre.push(" ");
var fullName = nombre.concat(apellido); 

console.log(fullName);

