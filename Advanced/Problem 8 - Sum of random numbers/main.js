function fold(array, callback) {
    let value = (arguments.length == 3 ? arguments[2] : null);
    for (let i = 0; i < array.length; i++) {
        value = callback(value, array[i], i, array);
    }
    return value;
}

function unfold(callback, initialValue) {
    let state = initialValue;
    let result = [];
    let tmp;
    while (tmp = callback(state)) {
        result.push(tmp[0]);
        state = tmp[1];
    }
    return result;
}

function sum10rand() {
    let count = 0;
    return fold(unfold((state) => {
        if (count++ == 10) return false;
        return [Math.random() * 10, state]
    }, 0) , (prevVal, val) => prevVal + val, 0);   
}