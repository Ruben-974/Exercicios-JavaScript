var msg = document.getElementById('msg_hora')
var foto = document.getElementById('foto')

// Descobrindo horario atual da maquina e escrevendo-a

var time = new Date
var hora = time.getHours()
msg.innerHTML = `Agora são ${hora} horas`

// Modificando o site de acordo com o horario

if (hora < 12 && hora >= 6) {
    document.body.style.backgroundColor = '#FBAF29'
    foto.src = 'imagens/foto_manha.png'
} else {
    if (hora >= 12 && hora <= 18) {
        document.body.style.backgroundColor = '#FF6400'
        foto.src = 'imagens/foto_tarde.png'
    } else {
        document.body.style.backgroundColor = '#191970'
        foto.src = 'imagens/foto_noite.png'
    }
}