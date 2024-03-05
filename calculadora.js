let input = document.getElementById('inputBox')
let buttons = document.querySelectorAll('button')

let string = "";
let arr = Array.from(buttons)
arr.forEach(button => {
    //Manipulador de eventos do botão, Quando um botão é clicado, o manipulador de eventos é chamado e o código dentro do bloco de código é executado
    button.addEventListener('click', (e) =>{
        //primeiro verifica se o botão clicado tem o texto "="
        if(e.target.innerHTML == '='){
//o método eval() serve para avaliar a expressão matemática no campo de entrada e atribuir o resultado à variável string
            string = eval(string);
            input.value = string;
        }
//Se o botão clicado não tiver o texto "=", o código verifica se tem o texto "AC". Se for esse o caso, o código atribui a string vazia à variável string e atualiza o valor do campo de entrada
        else if (e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
//Se o botão clicado não tiver o texto "AC", o código verifica se tem o texto "DEL". Se for esse o caso, o código remove o último caractere da string e atualiza o valor do campo de entrada
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
//Se o botão clicado não tiver o texto "AC", "DEL" ou "=", o código adiciona o texto do botão à string e atualiza o valor do campo de entrada.
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})