const calcular = document.getElementById("calcular");

function imc(){
    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");

    if(nome == "" || altura == "" || peso == ""){
        resultado.textContent = "Preencha todos os campos."
    }
    else{
        const valorIMC = (peso / (altura**2)).toFixed(2);

        let classif = "";

        if(valorIMC < 18.5){
            classif = "abaixo do peso";
        }
        else if (valorIMC < 25){
            classif = "com peso normal";
        }
        else if (valorIMC < 30){
            classif = "levemente acima do peso normal";
        }
        else if (valorIMC < 35){
            classif = "com obesidade grau 1";
        }
        else if (valorIMC < 40){
            classif = "com obesidade grau 2";
        }
        else{
            classif = "com obesidade grau 3"
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classif}`;
    }
}

calcular.addEventListener("click",imc);
