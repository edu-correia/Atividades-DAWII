let wrongDiv = document.getElementById('wrong');
let alertDiv = document.getElementById('err-alert');
let regex_emailValido = /^(\w+[._-]?)+@\w+(\w+[.]?)+$/;

function verify(){
    let nomeInput = document.getElementById('nome').value;
    let cpfInput = document.getElementById('cpf').value;
    let rgInput = document.getElementById('rg').value;
    let emailInput = document.getElementById('email').value;
    let cvvInput = document.getElementById('cvv').value;
    let foneInput = document.getElementById('fone').value;
    let vencimentoInput = document.getElementById('vencimento').value;
    
    if(nomeInput === "" || nomeInput.length < 20) {
        notifyProblem("nome");
        return;
    }

    if(cpfInput === "" || cpfInput.length !== 14) {
        notifyProblem("cpf");
        return;
    }

    if(rgInput === "" || rgInput.length !== 12) {
        notifyProblem("rg");
        return;
    }

    if(emailInput === "" || !(regex_emailValido.test(emailInput))) {
        notifyProblem("email");
        return;
    }

    if(cvvInput === "" || cvvInput.length !== 3) {
        notifyProblem("cvv");
        return;
    }

    if(foneInput === "" || foneInput.length !== 15) {
        notifyProblem("fone");
        return;
    }

    if(vencimentoInput === "" || vencimentoInput.length !== 5) {
        notifyProblem("vencimento");
        return;
    }

    //else
    if(confirm("Compra realizada com sucesso!\nDeseja voltar à página inicial?")) window.location.href="./index.html"
}

function notifyProblem(problem){
    wrongDiv.innerText = problem.toUpperCase();
    alertDiv.style.display = "block";
    document.getElementById(problem).focus();
}