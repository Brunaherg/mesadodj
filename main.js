function tocaSom  (idElementoaudio) {
    documento.querySelector(idElementoaudio).play();
}

const listadeteclas = document.querySelectorAll( '.tecla');

//para 
for (let contador =0; contador < listadeteclas.length; contador++) {

    const tecla = listadeteclas [contador];
    const instrumento = tecla.classlist[1];
    const idaudio =  #som_${instrumento} `; //template string

    tecla.onclick = function () {
        tocaSom(idaudio);
    {
    
    }
