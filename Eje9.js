function multiplicarArraY() {
    let numero;
    let arraynumero = [];
    let multiplicar;
    let nuevoarray = [];
    let multiplicador;
    do {
        numero = prompt("Ingrese numero para el array");

        if (numero == "") {
            alert("Ingrese numero, esta vacio");
        } else if (isNaN(numero)) {
            alert("iNGRESE NUMERO, NO CARACTER");
        } else if (numero <= 0) {
            alert("Numero negativo o menor, ingrese nuevamente");
        } else {
            for (let i = 0; i < numero; i++) {
                do {
                    arraynumero[i] = prompt("Ingrese numero " + (i + 1));
                    if (arraynumero[i] == "") {
                        alert("Ingrese numero, esta vacio");
                    } else if (isNaN(arraynumero[i])) {
                        alert("iNGRESE NUMERO, NO CARACTER");
                    } else if (arraynumero[i] <= 0) {
                        alert("Numero negativo o menor, ingrese nuevamente");
                    }
                } while (isNaN( arraynumero[i]) ||  arraynumero[i] <= 0);
            }

            do {
                multiplicar = prompt("Ingrese numero que se multiplique");
                if (multiplicar == "") {
                    alert("Ingrese numero, esta vacio");
                } else if (isNaN(multiplicar)) {
                    alert("iNGRESE NUMERO, NO CARACTER");
                } else if (multiplicar <= 0) {
                    alert("Numero negativo o menor, ingrese nuevamente");
                } else {
                    for (let j = 0; j < numero; j++) {
                        multiplicador = arraynumero[j] * multiplicar;
                        nuevoarray.push(multiplicador);
                    }
                }
            } while (isNaN(multiplicar) || multiplicar <= 0);

        }
    } while (isNaN(numero) || numero <= 0);
    console.log(arraynumero);
    console.log("Numero Multiplicado: es: "+multiplicar)
    console.log("MULTIPLICACION DEL NUEVO ARRAY");
    console.log(nuevoarray);



}