function criar_tabuada() {

    var valor = document.getElementById('valor')
    var msg = document.getElementById('msg')
    var lista = document.getElementById('lista')

    lista.innerHTML = ''

    msg.innerText = `Tabuada do ${valor.value}:`

    for (var c = 1; c <= 10; c++) {

        var new_opc = document.createElement('option')
        lista.appendChild(new_opc)

        new_opc.innerText = `${Number(valor.value)} x ${c} = ${Number(valor.value) * c}`

    }
}