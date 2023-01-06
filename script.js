function entradaDeTexto() {
  var conteudo = document.getElementById('mensagem').value.toLowerCase();
  return conteudo;
}

function criptografar() {
  var texto = entradaDeTexto();
  var elemento = document.getElementById('texto-saida');
  if(texto){
    esconderImagem();
  }else{
    mostrarImagem();
  }

  
  textoCriptografado = texto
  .replaceAll('e', 'enter')
  .replaceAll('i', 'imes')
  .replaceAll('a', 'ai')
  .replaceAll('o', 'ober')
  .replaceAll('u', 'ufat');

  elemento.value = textoCriptografado;
}

function descriptografar() {
  var texto = entradaDeTexto();
  var elemento = document.getElementById('texto-saida');
  if(texto){
    esconderImagem();
  }else{
    mostrarImagem();
  }

  textoDescriptografado = texto
  .replaceAll('enter', 'e')
  .replaceAll('imes', 'i')
  .replaceAll('ai', 'a')
  .replaceAll('ober', 'o')
  .replaceAll('ufat', 'u');

  elemento.value = textoDescriptografado;

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

function copiarTexto(){

  var copyText = document.getElementById('texto-saida');
  copyText.select()
  document.execCommand("copy");

}
