class lazy {
    args = [];
    func = null;
    toString() {
        alert('Evaluating')
        return this.func(...this.args);
    }
}

function makeLazy(func, ...args) {
    let lazyObj = new lazy();
    lazyObj.func = func;
    lazyObj.args = args;
    return function() {
        return lazyObj;
    }
}

function notLazyFun(a, b, c) {
    return a + b + c;
}

alert('1');
let a = 1, b = 2, c = 3;
let lazyFun = makeLazy(notLazyFun, a, b, c);
alert('2');
let result = lazyFun();
alert('3');
alert('result = ' + result);
alert('4');