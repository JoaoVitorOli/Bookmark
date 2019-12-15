var guardarCincoNumeros = [];

var cont1 = 0;
function calcularEx2(){
    cont1++;
    var div = document.getElementById('div1-ex2');
    var input = document.getElementById('input-numberEx2');

    var inputNum = Number(input.value);
    div.innerHTML += '<br>- O quadrado de ' + inputNum + ' é ' + inputNum**2;
    if (cont1 === 5){
        alert('Você adicionou os 5 números.');
    }
    if (cont1 === 5){
        var button = document.getElementById('buttonCalcularEx2');
        button.parentNode.removeChild(button);
    }
    /*if (cont1 === 5){
        var div2 = document.getElementById('div2-ex2');
        var createButton = document.createElement('button');
        var text = document.createTextNode('Reiniciar');
        createButton.appendChild(text);
        createButton.id = 'newButton';
        div2.appendChild(createButton);

        var reiniciarCalc = document.getElementById('newButton');
        reiniciarCalc.onclick = function() { reiniciar() };
    }*/

}
/*
function reiniciar(){
    var butReiniciar = document.getElementById('newButton');
    butReiniciar.parentNode.removeChild(butReiniciar);

    cont1 = 0;

    var div = document.getElementById('div1-ex2');
    div.parentNode.removeChild(div);

    var recriandoDiv1 =  document.createElement('div');
    recriandoDiv1.id = 'div1-ex2';
    var pegandoDiv3 = document.getElementById('div3-ex2');
    pegandoDiv3.appendChild(recriandoDiv1);

    var reButton = document.createElement('button');
    reButton.id = 'buttonCalcularEx2';
    reButton.
    var textReBut = document.createTextNode('Calcular');
    reButton.appendChild(textReBut);
    var pegandoDiv2 = document.getElementById('div2-ex2');
    pegandoDiv2.appendChild(reButton);

}*/