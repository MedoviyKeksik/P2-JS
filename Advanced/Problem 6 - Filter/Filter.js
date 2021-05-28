// built-in Array.prototype.filter
function filter(array, callback) {
    result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) result.push(array[i]);
    }
    return result;
}