var cont1Ex4 = 0;
var cont2Ex4 = 0;

function adicionarEx4(){
    var div1 = document.getElementById('div1-ex4');
    var div2 = document.getElementById('div2-ex4');
    var input = document.getElementById('input-ex4');
    var input = Number(input.value);

    if (input < 18 && input >= 0){
        cont1Ex4++;
    }else if (input >= 18 && input < 150){
        cont2Ex4++;
    } else if (input > 150){
        cont2Ex4++;
        alert('Ei! É quase impossivel alguem ter uma idade maior do que 150 anos hoje em dia! Mas irei adicionar do mesmo jeito =D');
    } else if (input < 0){
        alert('Ei! É impossivel alguem ter uma idade menor do que 0!');
    } else{
        alert('Ocorreu um erro inesperado!');
    }

    div2.innerHTML += `<br>- Número adicionado: ${input}`;
    div1.innerHTML = `Maiores de idade: ${cont2Ex4}<br>Menores de idade: ${cont1Ex4}`;
}