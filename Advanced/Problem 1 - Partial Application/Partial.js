// built-in bind
function partial(func, ...bindargs) {
    return function(...args) {
        return func.call(this, ...bindargs, ...args);
    }
}