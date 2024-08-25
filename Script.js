var textoInput = document.querySelector("#bb");
var Textoout = document.querySelector("#cc");

function Criptografar(){
    var texto = textoInput.value;

    var criptoMensagem = texto.replace(/e/g, "mir")
                              .replace(/a/g, "fsafs")
                              .replace(/i/g, "idsafs")
                              .replace(/o/g, "yss")
                              .replace(/u/g, "keti");
     
    document.getElementById('output').innerHTML = '<textarea readonly id="bb">' + criptoMensagem + '</textarea>' +
    '<button class="copy" id="copyi" onclick="copiarTexto()">Copiar</button>';
}

function Descriptografar(){
    var texto = textoInput.value;

    var descriptoMensagem = texto.replace(/mir/g, "e")
                                 .replace(/fsafs/g, "a")
                                 .replace(/idsafs/g, "i")
                                 .replace(/yss/g, "o")
                                 .replace(/keti/g, "u");
     
    document.getElementById('output').innerHTML = '<textarea id="cc">' + descriptoMensagem + '</textarea>' +
    '<button class="copy" id="copyi" onclick="copiarTexto()">Copiar</button>';
}

function copiarTexto(){
    var textoCopiado = document.getElementById('texto-principal');
    textoCopiado.select();
    document.execCommand('copy');
    alert('Texto foi copiado');
}
