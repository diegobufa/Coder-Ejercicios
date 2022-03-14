const calcular = document.getElementById('btnCalcularImc');

function imc(){  
    
    let alturaEnCentimetros= parseInt(document.getElementById ("altura").value);
    let alturaEnMetros = alturaEnCentimetros / 100;
    let pesoFinal = parseInt(document.getElementById("peso").value);  
     

    if ( pesoFinal !="" && alturaEnMetros !=""){
        const calcularImc = Math.round (pesoFinal / (alturaEnMetros **2));
        let clasificacion;
    
        if (calcularImc <= 15.9){
            clasificacion = "Desnutricion Severa";
        }
        else if (calcularImc <= 16.99) {
            clasificacion = "Desnutricion Moderada";
        }
        else if ( calcularImc <= 18.49) {
            clasificacion = "Desnutricion Leve";
        }
        else if ( calcularImc <= 24.9) {
            clasificacion = "Normal";
        }
        else if (calcularImc <= 29.9) {
            clasificacion = " Sobrepeso";
        }
        else if (calcularImc <= 39.9) {
            clasificacion = " Obesidad 1";
        }
        else if ( calcularImc <= 39.9) {
            clasificacion = "Obesidad 2";
        }
        else if (calcularImc > 40){
            clasificacion = "Obesidad 3";
        }
    
    
        let repuesta = "Tu calculo de IMC es: " + calcularImc + " y tu condicion es: " + clasificacion;        
        resultado.textContent = repuesta;
        return clasificacion;
    
    }
    
  
  
}

calcular.addEventListener('click', imc);