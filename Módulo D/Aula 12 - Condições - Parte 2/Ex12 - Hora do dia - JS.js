var hora = 10
var tempo = new Date()
var hora = tempo.getHours()

console.log(`Agora são ${hora}hrs`)

if (hora < 6 && hora >= 0) {
    console.log('Boa madrugada!')
} else {
    if (hora < 12) {
        console.log('Bom dia!')
    } else {
        if (hora <= 18) {
            console.log('Boa tarde!')
        } else {
            console.log('Boa noite!')
        }
    }
}