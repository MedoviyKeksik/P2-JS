// built-in Array.prototype.reduce
function fold(array, callback, initialValue = null) {
    let value = initialValue;
    for (let i = 0; i < array.length; i++) {
        value = callback(value, array[i], i, array);
    }
    return value;
}