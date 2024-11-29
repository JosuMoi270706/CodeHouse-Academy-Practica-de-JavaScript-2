/*Ejercicio 3: Bucle y Condicionales
Crea una función llamada contarVocales que reciba una cadena de texto y
devuelva el número de vocales que contiene.
Utiliza un bucle for para iterar sobre cada carácter de la cadena y un
condicional para verificar si el carácter es una vocal (a, e, i, o, u).
Prueba la función contarVocales con la cadena "JavaScript es divertido" y
muestra el resultado en la consola.*/



function contarvariables() {
    let texto = document.getElementById("variable").value;
    let a = 0, e = 0, i = 0, o = 0, u = 0;
    if (texto == "") {
        alert("Texto vacio, ingreso variable");
    } else if (!isNaN(texto)) {
        alert("No ingrese valor numerico, solo texto");
        document.getElementById("variable").value = "";
    } else {

        alert("El texto ingresado es : " + texto);
        document.getElementById("variable").value = "";

        console.log("El texto ingresado es: " + texto);
        console.log(texto.length);

        for (let j = 0; j <texto.length; j++) {
            if (texto[j] === 'a') {
                a++;
            } else if (texto[j] === 'e') {
                e++;
            } else if (texto[j] === 'i') {
                i++;
            } else if (texto[j] === 'o') {
                o++;
            } else if (texto[j] === 'u') {
                u++;
            }
        }
        console.log("En el texto '" + texto + "' hay:");
        console.log("Vocales con A: " + a);
        console.log("Vocales con E: " + e);
        console.log("Vocales con I: " + i);
        console.log("Vocales con O: " + o);
        console.log("Vocales con U: " + u);
    }
}