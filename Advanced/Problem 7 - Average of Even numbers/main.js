function fold(array, callback) {
    let value = (arguments.length == 3 ? arguments[2] : null);
    for (let i = 0; i < array.length; i++) {
        value = callback(value, array[i], i, array);
    }
    return value;
}

function filter(array, callback) {
    result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) result.push(array[i]);
    }
    return result;
}

function findEvenAverage(array) {
    let evenArray = filter(array, value => value % 2 == 0);
    let sum = fold(evenArray, (prevVal, currentVal) => prevVal + currentVal, 0);
    return sum / evenArray.length;
}

