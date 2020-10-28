function imc(){
    const resultDiv = document.getElementById('result');
    const weightInput = Number(document.getElementById('peso').value);
    const heightInput = Number(document.getElementById('altura').value.replace(',','.'));

    const imc = weightInput/(heightInput*heightInput);
    let color, situation;

    if(imc <= 18.5){
        color = "yellow"; 
        situation = "Abaixo do peso";
    }else if(imc <= 24.9){
        color = "green";
        situation = "Saudável";
    }else if(imc <= 29.9){
        color = "burlywood";
        situation = "Levemente acima";
    }else if(imc <= 34.9){
        color = "#c95a2f";
        situation = "Obesidade I";
    }else if(imc <= 39.9){
        color = "#b14318";
        situation = "Obesidade II";
    }else{
        color = "red";
        situation = "Obesidade III";
    }

    resultDiv.style.background = color;
    resultDiv.children[0].innerHTML = situation;
    resultDiv.children[1].innerHTML = `IMC: ${imc.toFixed(2)}`;
}

