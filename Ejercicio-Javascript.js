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

FASE 2 con funcion

var miNombre = ["D","a","n","i","e","l"];
var vocales =["a","e","i","o","u"]

function nombre(unNombre) { 
  	for (var x=0; x<unNombre.length; x++){
        var a = unNombre [x]
        if (vocales.indexOf(a) > -1 ){
          console.log("Vocal");
        } else {
          console.log("Consonante");
        }
    }
} 
nombre(miNombre);

//Con isNaN

var miNombre = ["D","a","n","i","e","l"];
var vocales =["a","e","i","o","u"]

function nombre(miNombre) {
      for (var x= 0; x< miNombre.length; i++) {
        var a = miNombre [x]
        if (vocales.indexOf(a,0) > -1) {
          console.log("Vocal")
        } else if (isNaN(a)== false) {
          console.log ("Los nombres de las personas no tienen numeros!")
        } else {
          console.log("Consonante")
        }
      }
}
nombre(miNombre);

FASE 3

var nombre = ["D","a","n","i","e","l"];
var cont = {};
for (var i=0; i < nombre.length; i++) {
  cont[nombre[i]] = (cont[nombre[i]] || 0) +1 ;
}
console.log(cont)

// Con map()

var miNombre = ["D","a","n","i","e","l","L","a","r","r","e","a"];
     nombre = new Map();

     function contarLetras(unNombre){
         for (var i = 0; i < unNombre.length; i++){            
             var contador = nombre.get(unNombre[i])
             if (contador == undefined) contador=0;
             nombre.set (unNombre[i], contador+1);
         }
     }
 contarLetras(miNombre)
 console.log(nombre)


FASE 4

var nombre = ["D","a","n","i","e","l"];
var apellido = ["L","a","r","r","e","a"];
var espacio = nombre.push(" ");
var fullName = nombre.concat(apellido); 

console.log(fullName);

