function sumMultiples() {
    let sum = 0; // sum es el valor total de la suma de los multiplos de 5 y 7
    // i es un valor que empieza en 0 y va hasta el numero 1000 para ser testear cuales son multiplos de 5 y 7
    for (let i = 0; i < 1000; i++) {
        if (i % 5 === 0 || i % 7 === 0) {
            sum += i; // aca esta sumando todos los multiplos de 5 y 7 para el valor final
        }
    }
    return sum;
}

console.log(sumMultiples()); // inicializador de la funcion