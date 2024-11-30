/* Ejercicio 8: Contar Caracteres
Crea una función llamada contarCaracteres que reciba una cadena de texto y un carácter, y devuelva el número de veces que el carácter aparece en la cadena.
Prueba la función contarCaracteres y muestra el resultado en la consola. */

// Función que cuenta el número de veces que un carácter aparece en una cadena
function contarCaracteres(cadena, caracter) {  // realizamos la funcion contar caracteres de cadena y caracter
    let contador = 0; // iniciamos un contador en 0
    for (let i = 0; i < cadena.length; i++) {  //  usamos un bucle for para verificar cada caracter en la cadena
        if (cadena[i] === caracter) {  // Si el carácter en la posición actual coincide con el carácter buscado, incrementa el contador.
            contador++;
        }
    }
    return contador;  // retornamos el contador
}

// Prueba de la función contarCaracteres
let cadenaTexto = "Como Estan Todos"; // se realiza la cadena texto "Como estan todos"
let caracterBuscar = "o"; // se realiza la cadena caracter de "o"
let resultado = contarCaracteres(cadenaTexto, caracterBuscar);  // se realiza el resultado  contar caracteres de texto y caracter

// Mostrar el resultado en la consola
console.log(`El carácter "${caracterBuscar}" aparece ${resultado} veces en la cadena "${cadenaTexto}".`);


// el resultado muestra de cuantos caracter de "o" hay en el texto = 4 caracter