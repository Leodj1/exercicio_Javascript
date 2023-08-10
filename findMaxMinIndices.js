function findMaxMinIndices(arr) {
    if (arr.length === 0) {
        return { minIndex: -1, maxIndex: -1 };
    }

    let minIndex = 0;
    let maxIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[minIndex]) {
            minIndex = i;
        }
        if (arr[i] > arr[maxIndex]) {
            maxIndex = i;
        }
    }

    return { minIndex, maxIndex };
}

module.exports = findMaxMinIndices;
