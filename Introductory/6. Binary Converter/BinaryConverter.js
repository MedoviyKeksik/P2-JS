class VectorNum {
    base = 10;
    array = [];

    constructor() {
        if (arguments.length == 1) {
            if (Array.isArray(arguments[0])) {
                this.array = arguments[0].slice(0);
            }
        }
        if (arguments.length == 2) {
            this.base = arguments[1];
            this.array = [];
            let num = arguments[0];
            while (num > 0) {
                this.array.push(Math.trunc(num % this.base))
                num = Math.trunc(num / this.base);
            }
        }
    }

    add(num) {
        for (let i = 0; i < num.length; i++) {
            if (i < this.array.length) this.array[i] += num[i];
            else this.array.push(num[i]);
        }
        this.transfer();
    }
    
    mul(num) {
        for (let i = 0; i < this.array.length; i++) {
            this.array[i] *= num;
        }
        this.transfer();
        return 0;
    }

    transfer() {
        let carry = 0;
        for (let i = 0; i < this.array.length; i++) {
            this.array[i] += carry;
            carry = Math.trunc(this.array[i] / this.base);
            this.array[i] %= this.base;
        }
        while (carry) {
            this.array.push(carry % this.base);
            carry = Math.trunc(carry / this.base);
        }
    }

    toString() {
        return JSON.stringify(this.array.reverse());
    }
}

class BinaryConverter {
    static ToBinary(num) {
        return BinaryConverter.Convert(num, 10, 2);
    }

    static ToDec(num) {
        return BinaryConverter.Convert(num, 2, 10);
    }

    static Convert(numVector, fromBase, toBase) {
        numVector = numVector.reverse();
        let tmp = new VectorNum(1, toBase);
        let result = new VectorNum(0, toBase);
        for (let i = 0; i < numVector.length; i++) {
            let addend = new VectorNum(tmp.array);
            addend.base = toBase;
            addend.mul(numVector[i]); 
            result.add(addend.array);
            tmp.mul(fromBase);
        }
        return result.toString();
    }
}

function Example(functionName, func, ...args) {
    let block = document.createElement('p');
    let functionArguments = '';
    for (let i = 0; i < args.length; i++) {
        if (i != 0) functionArguments += ', ';
        functionArguments += JSON.stringify(args[i]);
    }
    block.innerHTML = functionName + '(' + functionArguments + ') = ' + func(...args); 
    return block;
}

let node = document.querySelector(".binary-converter");
node.appendChild(Example('ToBinary', BinaryConverter.ToBinary, [8]));
node.appendChild(Example('ToBinary', BinaryConverter.ToBinary, [1, 0]));
node.appendChild(Example('ToBinary', BinaryConverter.ToBinary, [2, 5, 6]));
node.appendChild(Example('ToDec', BinaryConverter.ToDec, [1]));
node.appendChild(Example('ToDec', BinaryConverter.ToDec, [1, 0]));
node.appendChild(Example('ToDec', BinaryConverter.ToDec, [1, 1, 1, 1, 1, 1]));
node.appendChild(Example('Convert', BinaryConverter.Convert, [1], 3, 10));
node.appendChild(Example('Convert', BinaryConverter.Convert, [1, 0], 7, 10));
node.appendChild(Example('Convert', BinaryConverter.Convert, [1, 1, 10, 1, 7, 1], 11, 10));
