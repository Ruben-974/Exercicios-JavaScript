var lista_nums = []

var botao_add = document.getElementById('add')

botao_add.addEventListener('click', clicar)

function clicar() {

    var n = Number(document.getElementById('num').value)

    var paragrafo = document.getElementById('paragrafo')

    paragrafo.innerHTML = ''
    
    if (n <= 100 && n >= 1 && lista_nums.indexOf(n) == -1) {

        lista_nums.push(n)
        var lista = document.getElementById('lista')
        var opc = document.createElement('option')
        opc.setAttribute('value', n)
        lista.appendChild(opc)
        opc.innerText = `Número ${n}`

    } else if (n > 100 || n < 1){

        window.alert('Digite um número de 1 até 100!')

    } else if (lista_nums.indexOf(n) != -1) {

        window.alert('Esse número já está na lista, escolha outro!')

    }

}

var botao_fim = document.querySelector('input#fim')

botao_fim.addEventListener('click', finalizar)

function finalizar() {

    var soma = 0

    var saida = document.getElementById('saida')

    var paragrafo = document.getElementById('paragrafo')

    paragrafo.innerHTML = ''

    paragrafo.innerHTML += `Ao todo temos ${lista_nums.length} números cadastrados<br>`

    for (c in lista_nums) {

        soma += lista_nums[c]

        if (c == 0) {
            var maior = lista_nums[c]
            var menor = lista_nums[c]
        } if (lista_nums[c] > maior) {
            maior = lista_nums[c]
        } else if (lista_nums[c] < menor) {
            menor = lista_nums[c]
        }
    }

    paragrafo.innerHTML += `O maior número da lista e ${maior}<br>`
    paragrafo.innerHTML += `O menor número da lista e ${menor} <br>`
    paragrafo.innerHTML += `A soma dos valores e ${soma}<br>` 

    paragrafo.innerHTML += `A média dos valore e ${(soma / lista_nums.length).toFixed(2)}`

    saida.appendChild(paragrafo)

}
