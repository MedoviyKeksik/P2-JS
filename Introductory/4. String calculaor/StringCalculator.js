class StringCalculator {
    static Add(lhs, rhs) {
        return (Number(lhs) + Number(rhs)).toString();       
    }
    static Sub(lhs, rhs) {
        return (Number(lhs) - Number(rhs)).toString();       
    }

    static Mul(lhs, rhs) {
        return (Number(lhs) * Number(rhs)).toString();       
    }

    static Div(lhs, rhs) {
        return (Number(lhs) / Number(rhs)).toString();       
    }

    static Mod(lhs, rhs) {
        return (Number(lhs) % Number(rhs)).toString();       
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

let node = document.querySelector(".string-calculator");
node.appendChild(Example('Add', StringCalculator.Add, "124", "991"));
node.appendChild(Example('Add', StringCalculator.Add, "999", "1.0000000000001"));
node.appendChild(Example('Add', StringCalculator.Add, "1436.987654321", "-346.123456789"));
node.appendChild(Example('Add', StringCalculator.Add, "123.456789", "123.456789"));

node.appendChild(Example('Sub', StringCalculator.Sub, "124", "991"));
node.appendChild(Example('Sub', StringCalculator.Sub, "999", "1.0000000000001"));
node.appendChild(Example('Sub', StringCalculator.Sub, "1436.987654321", "-346.123456789"));
node.appendChild(Example('Sub', StringCalculator.Sub, "123.456789", "123.456789"));


node.appendChild(Example('Mul', StringCalculator.Mul, "124", "991"));
node.appendChild(Example('Mul', StringCalculator.Mul, "999", "1.0000000000001"));
node.appendChild(Example('Mul', StringCalculator.Mul, "1436.987654321", "-346.123456789"));
node.appendChild(Example('Mul', StringCalculator.Mul, "123.456789", "123.456789"));


node.appendChild(Example('Div', StringCalculator.Div, "124", "991"));
node.appendChild(Example('Div', StringCalculator.Div, "999", "1.0000000000001"));
node.appendChild(Example('Div', StringCalculator.Div, "1436.987654321", "-346.123456789"));
node.appendChild(Example('Div', StringCalculator.Div, "123.456789", "123.456789"));


node.appendChild(Example('Mod', StringCalculator.Mod, "124", "991"));
node.appendChild(Example('Mod', StringCalculator.Mod, "999", "1.0000000000001"));
node.appendChild(Example('Mod', StringCalculator.Mod, "1436.987654321", "-346.123456789"));
node.appendChild(Example('Mod', StringCalculator.Mod, "123.456789", "123.456789"));
