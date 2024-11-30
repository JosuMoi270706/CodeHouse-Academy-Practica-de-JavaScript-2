/* Ejercicio 4: Concatenación de Arrays
Crea dos arrays, array1 y array2, cada uno con 5 números diferentes.
Crea una función llamada concatenarArrays que reciba dos arrays como argumentos y devuelva un nuevo array que sea la concatenación de los dos.
Llama a la función concatenarArrays con array1 y array2 y muestra el resultado en la consola.*/

// Crear dos arrays con 5 números diferentes cada uno
let array1 = [15, 25, 35, 45, 55];
let array2 = [60, 70, 80, 90, 100];

// Función que concatena dos arrays
function concatenarArrays(array1, array2) {
    return array1.concat(array2);
}

// Llamar a la función concatenarArrays con array1 y array2
let arrayConcatenado = concatenarArrays(array1, array2);

// Mostrar el resultado en la consola
console.log("Array concatenado:", arrayConcatenado);
