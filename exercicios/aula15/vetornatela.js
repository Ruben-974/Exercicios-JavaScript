let lista = [2, 6, 5, 3, 9]

/*

Jeito Deficiente D:

console.log(lista[0])
console.log(lista[1])
console.log(lista[2])
console.log(lista[3])
console.log(lista[4])

*/

/*
Jeito Eficiente :D

for (var n = 0; n < lista.length; n++ ) {
    console.log(lista[n])
}
*/

for (let n in lista) {
    console.log(lista[n])
}
