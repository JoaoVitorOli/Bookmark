let cont = 0;
let guardarNumeros = [];
//Number(guardarNumeros);

function adicionar(){ //Função para o usuario adicionar números 
    let input = document.getElementById('input-number');
    let inputNum = Number(input.value);
    var div = document.getElementById('div1-ex1');
    div.innerHTML += "<br>" + inputNum;

    guardarNumeros.push(inputNum);
    cont++;
    console.log('O cont é ' + cont);
    console.log(guardarNumeros);
}

var somas = 0;
var media = 0;

function calcular(){ //Função para somar
    for (var contador = 0; contador < cont; contador++){
        var somador = guardarNumeros[contador];
        somas = somas + somador;
        media = somas
        media = somas / cont;
        Number(media);
        Number(somas);
        console.log(somas);
    }
    console.log('A soma é ' + media);

    var div2 = document.getElementById('div2-ex1');
    var parag = document.createElement('p');
    var texto = document.createTextNode(`A média dos números digitados é ${media}`);
    parag.appendChild(texto);
    div2.appendChild(parag);
    
}
