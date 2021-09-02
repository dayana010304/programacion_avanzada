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

//Datos de salida:

// Valor a pagar matricula.
// Cantidad de creditos a registrar.

//-----------------------------------METODO TRADICIONAL CONDICIONAL IF AND ELSE IF-------------------------------------------------
/*
let number2 = 12345;
let dm= number2%10;
let aux1= number2/10;
let um=aux1%10;
let c=(aux1/10)%10;


let number = 1234566666666666;
let inverNum = "";

while (number > 0) {
    inverNum += number%10;
    number=parseInt(number/10);
}
console.log(inverNum);

*/

/*
function reverseNumber(number) {

    let inverNum = "";

    while (number > 0) {
        inverNum += number%10;
        number=parseInt(number/10);
        
    }
    return inverNum;
}
let result=reverseNumber(658965865);
console.log(result);
 */

const reverseNumber = (number) =>{

    let inverNum = "";

    while (number > 0) {
        inverNum += number%10;
        number=parseInt(number/10);
    }
    return inverNum;
}
let result=reverseNumber(658965865);
console.log(result);


function calcular() {
    
//promedio=parseFloat(prompt("Digite el promedio"));
//programa=prompt("Digite el programa - Pregrado o Posgrado");    
programa=document.getElementById("programa").value;
promedio = parseFloat(document.getElementById('prom').value);
let mensaje1 = `document.getElementById("credito").innerHTML`;

let credito;    
let descuento;
let ValCreditoPre = 50000;
let ValCreditoPos = 300000;
let TotalMatricula;

if (promedio >= 4.5 && programa == "Pregrado") {
    credito=28;
    descuento=0.75;
    TotalMatricula=(ValCreditoPre*credito)*descuento;
   mensaje1 = credito;
    document.getElementById("matricula").innerHTML = TotalMatricula;
    document.getElementById("descuento").innerHTML = "25%";
    document.getElementById("valorCredito").innerHTML = ValCreditoPre;
    console.log(`La cantidad de creditos a matricular son: ${credito}, y debes pagar un total de: $${TotalMatricula}`);    
    }else if(promedio >= 4.0 && promedio < 4.5  && programa=="Pregrado"){
        credito=25;
        descuento=0.90;
        TotalMatricula=(ValCreditoPre*credito)*descuento;
        document.getElementById("credito").innerHTML = credito;
        document.getElementById("matricula").innerHTML = TotalMatricula;
        document.getElementById("descuento").innerHTML = "10%";
        document.getElementById("valorCredito").innerHTML = ValCreditoPre;
        console.log(`La cantidad de creditos a matricular son: ${credito}, y debes pagar un total de: $${TotalMatricula}`);    
        }else if(promedio > 3.5 && promedio < 4.0  && programa=="Pregrado"){
            credito=20;
            TotalMatricula=(ValCreditoPre*credito);
            document.getElementById("credito").innerHTML = credito;
            document.getElementById("matricula").innerHTML = TotalMatricula;
            document.getElementById("descuento").innerHTML = "0%";
            document.getElementById("valorCredito").innerHTML = ValCreditoPre;
            console.log(`La cantidad de creditos a matricular son: ${credito}, y debes pagar un total de: $${TotalMatricula}`);    
            }else if(promedio >= 2.5 && promedio < 3.5  && programa=="Pregrado"){
                credito=15;
                TotalMatricula=(ValCreditoPre*credito);
                document.getElementById("credito").innerHTML = credito;
                document.getElementById("matricula").innerHTML = TotalMatricula;
                document.getElementById("descuento").innerHTML = "0%";
                document.getElementById("valorCredito").innerHTML = ValCreditoPre;
                console.log(`La cantidad de creditos a matricular son: ${credito}, y debes pagar un total de: $${TotalMatricula}`);    
                }else if(promedio < 2.5 && programa=="Pregrado"){
                    console.log(`El alumno no puede matricularse por que perdio la materia`); 
                    alert(`Lo sentimos, El alumno no puede matricularse por que perdio la materia`)   
                    }else if(promedio >= 4.5 && programa == "Posgrado") {
                        credito=20;
                        descuento=0.80;
                        TotalMatricula=(ValCreditoPos*credito)*descuento;
                        document.getElementById("credito").innerHTML = credito;
                        document.getElementById("matricula").innerHTML = TotalMatricula;
                        document.getElementById("descuento").innerHTML = "20%";
                        document.getElementById("valorCredito").innerHTML = ValCreditoPos;
                        console.log(`La cantidad de creditos a matricular son: ${credito}, y debes pagar un total de: $${TotalMatricula}`);    
                        }else if(promedio < 4.5 && programa == "Posgrado") {
                            credito=10;
                            TotalMatricula=(ValCreditoPos*credito);
                            document.getElementById("credito").innerHTML = credito;
                            document.getElementById("matricula").innerHTML = TotalMatricula;
                            document.getElementById("descuento").innerHTML = "0%";
                            document.getElementById("valorCredito").innerHTML = ValCreditoPos;
                            console.log(`La cantidad de creditos a matricular son: ${credito}, y debes pagar un total de: $${TotalMatricula}`);    
                            }else{
                                console.log("Revise los datos, no esta dentro de los parametros"); 
                            }
 }