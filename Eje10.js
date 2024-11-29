function revertircadena(){
    let cadena=prompt("Ingrese cadena de texto");
    let cadenainvertida="";
    console.log("La cadena de texto es:"+cadena);
    for(let i=cadena.length-1;i>=0;i--){
        cadenainvertida+=cadena[i];
    }
    console.log("La cadena invertida es: "+cadenainvertida);
}   