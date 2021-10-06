function contador() {

    var inc = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('passo')
    var res = document.getElementById('res')
    var con = document.getElementById('contar')

    if (inc.value != '' && fim.value != '') {

        inc = Number(inc.value)
        fim = Number(fim.value)
        pas = Number(pas.value)

        if (pas == 0) {
            pas = 1
        }

        if (pas < 0) {

            var temp = fim
            fim = inc
            inc = temp
            pas = -pas

        }

        res.innerHTML = `Contando de ${inc} até ${fim} de ${pas} em ${pas} ...`

        con.innerText = ''

        if (inc <= fim) {

            for(inc; inc <= fim; inc += pas) {
                con.innerText += ` ${inc} \u{1f449}`
            }
        } else {

            for(inc; inc >= fim; inc -= pas) {
                con.innerText += ` ${inc} \u{1f449}`
            }
        }
        
        con.innerText += `\u{1f3c1}`
        
    } else {

        con.innerText = '...'

        if (inc.value == '' && fim.value != '') {

            res.innerText = 'O valor do inicio e invalido!'

        } else if (fim.value == '' && inc.value != '') {

            res.innerText = 'O valor do fim e invalido!'

        } else if (inc.value == '' && fim.value == '') {

            res.innerText = 'Os valores do inicio e do fim são invalidos'

        } else if (Number(pas.value) < 0) {
            res.innerText = 'O passo e negativo!'
        }
    }
}
