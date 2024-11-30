/* Ejercicio 8: Contar Caracteres
Crea una función llamada contarCaracteres que reciba una cadena de texto y un carácter, y devuelva el número de veces que el carácter aparece en la cadena.
Prueba la función contarCaracteres y muestra el resultado en la consola. */

// Función que cuenta el número de veces que un carácter aparece en una cadena
function contarCaracteres(cadena, caracter) {
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === caracter) {
            contador++;
        }
    }
    return contador;
}

// Prueba de la función contarCaracteres
let cadenaTexto = "Como Estan Todos";
let caracterBuscar = "o";
let resultado = contarCaracteres(cadenaTexto, caracterBuscar);

// Mostrar el resultado en la consola
console.log(`El carácter "${caracterBuscar}" aparece ${resultado} veces en la cadena "${cadenaTexto}".`);
