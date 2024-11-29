/*Ejercicio 1: Manipulación de Arrays
Crea un array llamado numeros que contenga los números del 1 al 10.
Utiliza un bucle for para imprimir cada número del array en la consola.
Crea una función llamada sumaArray que reciba un array de números y
devuelva la suma de todos los elementos del array.
Llama a la función sumaArray pasando el array numeros y muestra el resultado
en la consola.*/


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let i=0;i<numeros.length;i++){
    console.log(numeros[i]);
}

function sumaArray() {
    let numero = parseInt(document.getElementById("numero").value);
    let numeros = [];
    let suma = 0;

    for (let i = 0; i<numero;i++) {
        let numeroIngresado = parseInt(prompt("Ingrese el número " + (i + 1) + ":"));
        numeros.push(numeroIngresado);  
        suma += numeroIngresado;        
    }
    console.log("Los números ingresados son: " + numeros);
    console.log("La suma total de los números es: " + suma);}