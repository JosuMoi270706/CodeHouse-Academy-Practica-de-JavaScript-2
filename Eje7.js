function filtrarPalabras() {
    let palabra;
    let palabras = [];
    let arraynuevo = [];
    let numeros;
    do {
        let cantidad = document.getElementById("cantidad").value;
        if (cantidad == "") {
            alert("Campo vacio, ingrese numero");
        } else if (isNaN(cantidad)) {
            alert("Solo numero");
            document.getElementById("cantidad").value = "";
        } else if (cantidad <= 0) {
            alert("Ingreso numero negativo o cero, vuelve a ingresar nuevamente");
            document.getElementById("cantidad").value = "";

        } else {
            do {
                numeros = prompt("Ingrese numero para contar para el array");
                if (numeros == "") {
                    alert("INGRESE NUMERO,CAMPO VACIO");
                } else if (isNaN(numeros)) {
                    alert("USTED INGRESO TEXTO, SOLO NUMERO");
                } else if (numeros <= 0) {
                    alert("Ingrese numero positivo, vuelve a ingresar nuevamente");
                } else {
                    for (let i = 0; i < cantidad; i++) {
                        do {
                            palabra = prompt("Ingrese palabra " + (i + 1));
                            if (palabra == "") {
                                alert("Campo vacio, ingrese texto");
                            } else if (!isNaN(palabra)) {
                                alert("Solo ingresar texto, no numeros");
                            } else {
                                palabras.push(palabra);
                            }
                        } while (!isNaN(palabra));
                    }


                }

            } while (numeros <= 0 || isNaN(numeros));
            for (let j = 0; j < cantidad; j++) {
                if (palabras[j].trim().length> numeros) {
                    arraynuevo.push(palabras[j]);
                }
            }
            console.log("Palabras originales:", palabras);
            console.log("Cantidad de palabras a contener:" + numeros)
            console.log("Palabras filtradas mayores a cantidad de palabras a contener:", arraynuevo);
        }
    } while (cantidad <= 0);
}







