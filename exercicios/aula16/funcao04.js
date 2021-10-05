function fib(n) {
    fib = 1
    for (n; n > 1; n--){
        fib *= n
    }
    return fib
}

console.log(fib(5))
