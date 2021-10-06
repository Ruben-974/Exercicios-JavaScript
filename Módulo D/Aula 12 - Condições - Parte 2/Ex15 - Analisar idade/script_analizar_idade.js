// Buscando o ano atual

var time = new Date()
var ano_atual = time.getFullYear()
document.getElementById('ano').max = ano_atual

var msg = document.getElementById('msg_final')
var resp = document.getElementById('resp')

var img = document.createElement('img')

img.style.display = 'block'
img.style.margin = 'auto'
img.style.marginTop = '20px'

function analizar_idade() {

    // Ano de nascimento do usuario

    var ano_nasc = Number(document.getElementById('ano').value)
    var idade = ano_atual - ano_nasc
    
    // Sexo do usuario

    var sexo = document.getElementsByName('sexo')
    sexo[0].checked ? sexo = 'masculino' : sexo = 'feminino'
    
    // Escolhendo a imagem mais adequada

    if (sexo == 'masculino') {

        if (idade >= 0 && idade <= 12) {
            img.setAttribute('src', 'imagens/homem_crianca.png')
        } else if (idade <= 21) {
            img.setAttribute('src', 'imagens/homem_jovem.png')
        } else if (idade <= 45) {
            img.setAttribute('src', 'imagens/homem_adulto.png')
        } else if (idade > 45) {
            img.setAttribute('src', 'imagens/homem_idoso.png')
        }

    } else if (sexo == 'feminino') {

        if (idade >= 0 && idade <= 12) {
            img.setAttribute('src', 'imagens/mulher_crianca.png')
        } else if (idade <= 21) {
            img.setAttribute('src', 'imagens/mulher_jovem.png')
        } else if (idade <= 45) {
            img.setAttribute('src', 'imagens/mulher_adulto.png')
        } else if (idade > 45) {
            img.setAttribute('src', 'imagens/mulher_idoso.png')
        }
    }

    // Escrevendo uma mensagem com as informações do usuario

    msg.innerText = `Detectamos uma pessoa do sexo ${sexo} com ${idade} anos`
    resp.appendChild(img)

}