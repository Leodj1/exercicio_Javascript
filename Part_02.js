function findMaxMinIndices(arr) {
    let minIndex = 0; // valor minimo del array
    let maxIndex = 0; // valor maixmo del array

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minIndex) {
            minIndex = arr[i]; // si se cumple la condicion de arriba minIndex va a recibir el valor minimo del array actual
        }
        if (arr[i] > maxIndex) {
            maxIndex = arr[i]; // si se cumple la condicion de arriba maxIndex va a recibir el valor maximo del array actual
        }
    }

    return { minIndex, maxIndex };
}

console.log(findMaxMinIndices([1, 3, 7, 6, 0, -1])); // valores para el array y iniciador de la funcion

