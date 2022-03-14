

window.onload = iniciar;
function iniciar(){
    let calcularImc = document.getElementById("btnCalcularImc");
    calcularImc.addEventListener('click', btnCalcularImc);
}
    




function calcularImc(){
    console.log("esto es un mensaje");
    

    let alturaEnCentimetros= parseInt(document.getElementById ("altura").value);
    let alturaEnMetros = alturaEnCentimetros / 100;

    let pesoFinal = parseInt(document.getElementById("peso").value);
  

    while( pesoFinal !="" && alturaEnMetros !=""){
        let imc = Math.round(pesoFinal / (alturaEnMetros) * (alturaEnMetros));
        let clasificacion;
    }
        if (imc <= 15.9){
            clasificacion = "Desnutricion Severa";
        }
        else if (imc >=16 && imc<= 16.99) {
            clasificacion = "Desnutricion Moderada";
        }
        else if (imc >=17 && imc<= 18.49) {
            clasificacion = "Desnutricion Leve";
        }
        else if (imc >=18.5 && imc<= 24.9) {
            clasificacion = "Normal";
        }
        else if (imc >=25 && imc<= 29.9) {
            clasificacion = " Sobrepeso";
        }
        else if (imc >=30  && imc<= 39.9) {
            clasificacion = " Obesidad 1";
        }
        else if (imc >=35 && imc<= 39.9) {
            clasificacion = "Obesidad 2";
        }
        else if (imc > 40){
            clasificacion = "Obesidad 3";
        }
    
    
    let repuesta = "Tu calculo de IMC es: " + imc + " y tu condicion es: " + clasificacion;
    alert(repuesta);
}