function esPar(numero){
    console.log("Numero: "+numero);
    if(numero%2==0){
        console.log("TRUE");
    }else{
        console.log("FALSE");
    }
}
esPar(50);

function filtrarpares(){
    let numero=parseInt(document.getElementById("numero").value);
    let numeros=[];
    let numerospares=[];
    for(let i=0;i<numero;i++){
            numeros[i]=parseInt(prompt("Ingrese numero "+(i+1)));
            if(numeros[i]%2==0){
                numerospares.push(numeros[i]);
            }
    }
    console.log("Los numeros ingresados son : "+numeros);
    console.log("Los numeros pares son : "+numerospares);
} 