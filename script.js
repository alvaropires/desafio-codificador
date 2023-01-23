
const textArea = document.getElementById('mensagem');
const mensagem = document.getElementById('texto-saida');

let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];


function btnCriptografar(){

  var textoCriptografado = criptografar(textArea.value.toLowerCase());
  mensagem.value = textoCriptografado;
  esconderCaixaMensagem(textoCriptografado)
  textArea.value = "";

  
}

function criptografar(stringCriptografada) {

  stringCriptografada = stringCriptografada.toLowerCase();

  for(var i = 0; i < matrizCodigo.length; i++){
    if(stringCriptografada.includes(matrizCodigo[i][0])){
     stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  return stringCriptografada;
}

function btnDescriptografar(){

  var textoCriptografado = descriptografar(textArea.value.toLowerCase());
  mensagem.value = textoCriptografado;
  esconderCaixaMensagem(textoCriptografado)
  textArea.value = "";
}


function descriptografar(stringCriptografada) {

  stringCriptografada = stringCriptografada.toLowerCase();

  for(var i = 0; i < matrizCodigo.length; i++){
    if(stringCriptografada.includes(matrizCodigo[i][1])){
     stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }
  return stringCriptografada;
}

function esconderImagem(){

  var imagem = document.getElementById("aviso");
  var texto = document.getElementById("mensagem-saida");
  imagem.style.display = 'none';
  texto.style.display = 'block'
}

function mostrarImagem(){
  document.getElementById("aviso").style.display = 'block';
  document.getElementById("mensagem-saida").style.display = 'none';
}

function ativarSom(string){
  var som = new Audio();
  som.src = string;
  som.play();
}

function esconderCaixaMensagem(mensagem){
  if(mensagem){
    esconderImagem();
    ativarSom('audio-shenlong.mp3');
  }else{
    mostrarImagem();
  }
}

function copiarTexto(){

  var copyText = document.getElementById('texto-saida');
  copyText.select()
  document.execCommand("copy");

}