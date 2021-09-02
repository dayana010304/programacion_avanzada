//Datos de entrada:
//Promedio >=4,5 y alumno=Pregrado entonces  = 28 creditos y tendra un 25% de descuento.
//Promedio >= 4,0 y < 4,5 alumno=Pregrado entonces = 25 creditos y tendra 10% de descuento.
//Promedio > 3,5 y < 4,0 alumno=Pregrado entonces = 20 creditos sin descuento.
//Promedio >= 2,5 y < 3,5 alumno=Pregrado entonces = 15 creditos sin descuento.
//Promedio < 2,5 y alumno=Pregrado no podra matricularse.

// Promedio >=4,5 y alumno=Posgrado entonces  = 20 creditos y tendra un 20% de descuento.
// Promedio <4,5 y alumno=Posgrado entonces  = 10 creditos  sin descuento.
//Valor credito = $50.000 pregrado
//Valor credito = $300.000 posgrado

//-----------------------------Datos de salida:
// Valor a pagar matricula.
// Cantidad de creditos a registrar.

//----------------------Metodo CASE---------------------------



function calcular() {

    promedio=parseFloat(prompt("Digite el promedio"));
    programa=prompt("Digite el programa - Pregrado o Posgrado");    
//promedio=parseFloat(document.getElementById('prom'));
//let promedio=4.5;

//let Programa=document.getElementById("programa");

let ValCreditoPre = 50000;
let ValCreditoPos = 300000;
let TotalMatricula;

switch (programa) {
    case "Pregrado":
        if (promedio >= 4.5) {
        
            TotalMatricula=(ValCreditoPre*28)*0.75;
            document.getElementById("credito").innerHTML = "28";
            document.getElementById("descuento").innerHTML = "25%"
            document.getElementById("matricula").innerHTML = TotalMatricula;
            document.getElementById("valorCredito").innerHTML = ValCreditoPre;
           
        }else if(promedio >= 4.0 && promedio < 4.5){
            TotalMatricula=(ValCreditoPre*25)*0.90;
            console.log(`La cantidad de creditos a matricular son: 25, y debes pagar un total de: $${TotalMatricula}`);
        }else if(promedio > 3.5 && promedio < 4.0){
            TotalMatricula=(ValCreditoPre*20);
            console.log(`La cantidad de creditos a matricular son: 20, y debes pagar un total de: $${TotalMatricula}`);
        }else if(promedio >= 2.5 && promedio < 3.5) {
            TotalMatricula=(ValCreditoPre*15);
            console.log(`La cantidad de creditos a matricular son: ${credito}, y debes pagar un total de: $${TotalMatricula}`);    
            }else{
                document.getElementById("credito").innerHTML = "Hello JavaScript!"
                console.log("No se puede matricular perdio la materia");    
            }
        break;
    case "Posgrado":
        if (promedio >= 4.5) {
            TotalMatricula=(ValCreditoPos*20)*0.75;
            console.log(`La cantidad de creditos a matricular son: 20, y debes pagar un total de: $${TotalMatricula}`);
        }else if(promedio < 4.5){
            TotalMatricula=(ValCreditoPos*10);
            console.log(`La cantidad de creditos a matricular son: 10, y debes pagar un total de: $${TotalMatricula}`);
        }else{
            console.log("Revise los valores");
        }
        break;

}
//return calculos;
}
calculos();