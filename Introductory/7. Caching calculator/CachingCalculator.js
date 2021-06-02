class CachingCalculator {
    cache = {}
    constructor() {
        this.cache.add = {};
        this.cache.sub = {};
        this.cache.mul = {};
        this.cache.div = {};
    }

    add(a, b) {
        console.log(this.cache.add);
        if (typeof(this.cache.add[a, b]) == 'undefined') {
            this.cache.add[a, b] = a + b;
            return "Counted: " + this.cache.add[a, b];
        }
        return "Cached: " + this.cache.add[a, b];
    }

    sub(a, b) {
        if (typeof(this.cache.sub[a, b]) == 'undefined') {
            this.cache.sub[a, b] = a - b;
            return "Counted: " + this.cache.sub[a, b];
        }
        return "Cached: " + this.cache.sub[a, b];
    }

    mul(a, b) {
        if (typeof(this.cache.mul[a, b]) == 'undefined') {
            this.cache.mul[a, b] = a * b;
            return "Counted: " + this.cache.mul[a, b];
        }
        return "Cached: " + this.cache.mul[a, b];
    }

    div(a, b) {
        if (typeof(this.cache.div[a, b]) == 'undefined') {
            this.cache.div[a, b] = a / b;
            return "Counted: " + this.cache.div[a, b];
        }
        return "Cached: " + this.cache.div[a, b];
    }
}

var calculator = new CachingCalculator();

function Example(functionName, func, obj, ...args) {
    let block = document.createElement('p');
    let functionArguments = '';
    for (let i = 0; i < args.length; i++) {
        if (i != 0) functionArguments += ', ';
        functionArguments += JSON.stringify(args[i]);
    }
    block.innerHTML = functionName + '(' + functionArguments + ') = ' + func.call(obj, ...args); 
    return block;
}

let node = document.querySelector(".caching-calculator");
node.appendChild(Example('add', calculator.add, calculator, 1, 2));
node.appendChild(Example('add', calculator.add, calculator, 2, 1));
node.appendChild(Example('add', calculator.add, calculator, 1, 2));

node.appendChild(Example('sub', calculator.sub, calculator, 1, 2));
node.appendChild(Example('sub', calculator.sub, calculator, 2, 1));
node.appendChild(Example('sub', calculator.sub, calculator, 1, 2));

node.appendChild(Example('mul', calculator.mul, calculator, 1, 2));
node.appendChild(Example('mul', calculator.mul, calculator, 2, 1));
node.appendChild(Example('mul', calculator.mul, calculator, 1, 2));

node.appendChild(Example('div', calculator.div, calculator, 1, 2));
node.appendChild(Example('div', calculator.div, calculator, 2, 1));
node.appendChild(Example('div', calculator.div, calculator, 1, 2));
