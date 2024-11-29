/*Ejercicio 5: Promedio de Números
Crea un array llamado numeros que contenga al menos 10 números.
Crea una función llamada calcularPromedio que reciba un array de números y
devuelva el promedio de esos números.
Llama a la función calcularPromedio con el array numeros y muestra el
resultado en la consola.*/



function calcularPromedio() {
    let numeros = [];
    let numero = parseInt(document.getElementById("numero").value);

    if (numero == "") {
        alert("Ingrese numero");
    } else if (isNaN(numero)) {
        alert("Ingresar solo numero");
        document.getElementById("numero").value = "";
    } else if (numero < 10) {
        alert("Tiene que ser mayor o igual a 10 para entrar al array ");
        document.getElementById("numero").value = "";

    } else {
        let suma = 0;
        let promedio;
        for (let i = 0; i < numero; i++) {

            do {
                numeros[i] = parseInt(prompt("Ingrese numero " + (i + 1) + " : "));

                if (numeros[i] == "") {
                    alert("Campo vacio");
                } else if (isNaN(numeros[i])) {
                    alert("Ingresar solo numero");
                } else {
                    console.log(numeros);
                    suma += numeros[i];
                }
            } while (isNaN(numeros[i]));

        }
        promedio = suma / numero;
        console.log("Los numeros son : " + numeros);
        console.log("Los suma de numeros dentro del array es  : " + suma);
        console.log("El promedio de los numeros de array es :" + promedio);

    }
}