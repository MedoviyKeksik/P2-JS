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