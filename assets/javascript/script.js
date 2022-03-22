const enviar = document.querySelector('#submit');
enviar.addEventListener("click",verificarEmail,validarCaracteres);

var email = document.querySelector('#email');
var valorEmail = email.value;

var campoMensagem = document.getElementById('mensagem')
var textoRecebido = campoMensagem.value


function verificarEmail(event){
    event.preventDefault();
    const email = document.querySelector('#email');
    //VALIDAR SE ESTA NO FORMATO DE EMAIL
    if(!validarFormatoEmail(email.value)){
        document.getElementById('erro-email').innerHTML ="Erro no envio: Endereço de email inválido"
        limparMsgSucess()
        return
    }
        validarCaracteres();
}
//VALIDAR EMAIL COM REGEX
function validarFormatoEmail(email) {
    var regex = /^[a-z0-9A-Z.]+@[a-z0-9]+\.[a-z]+([a-z]+)?$/;
    limparMsgSucess()
    return regex.test(email);
}

//VALIDAR EMAIL SE FICAR EM BRANCO OU NÃO CONTER @

function validarCaracteres() {
    const emailValue = document.querySelector('#email').value
    if(emailValue === undefined || !emailValue.includes("@")) {
        document.getElementById('erro-email').innerHTML ="Erro no envio: Endereço de email inválido"
        limparMsgSucess()
        return     
    }
//SPLIT PARA SEPARAR O USER E O DOMAIN
    var elementosEmail = email.value.split("@");
    var user = elementosEmail[0];
    var dominio = elementosEmail[1];
    //SE NAO INCLUIR O PONTO APOS O DOMINIO
    if(!dominio.includes(".")) {
        document.getElementById('erro-email').innerHTML ="Erro no envio: Endereço de email inválido"
        limparMsgSucess()
        return                
    }

    //PEGAR O DOMINIO APOS O "."
    dominio = dominio.split(".")[0];
        
    var campoMensagem = document.getElementById('mensagem')
    var textoRecebido = campoMensagem.value
//VALIDAR SE A QTDA DE CARACTERES ATENDE OS REQUISITOS E SE A MENSAGEM FOI COLOCADA
    if (user.length > 32 || dominio.length > 16){
        document.getElementById('erro-email').innerHTML ="Erro no envio: Endereço de email inválido"
        limparMsgSucess()
    }else if( textoRecebido == ""){
        document.getElementById('erro-msg').innerHTML ="Erro no envio: Insira uma mensagem"
        limparMsgSucess()
    } else {
        document.getElementById('msg-sucess').innerHTML =`Obrigado(a) pelo contato, ${user}`
        limparCampos()
        limparMsgErro()
    }
} 

//FUNÇÕES PARA LIMPAR OS CAMPOS E MENSAGENS DE ERRO
function limparCampos() {
    const email = document.querySelector('#email');
    var campoMensagem = document.getElementById('mensagem')
    
    email.value = ""
    campoMensagem.value = ""
}

function limparMsgErro(){
    const msg = document.getElementById('erro-msg').innerHTML = ""
    const emailErro = document.getElementById('erro-email').innerHTML = ""
}

function limparMsgSucess(){
    const msgSucess = document.getElementById('msg-sucess').innerHTML =""
}


