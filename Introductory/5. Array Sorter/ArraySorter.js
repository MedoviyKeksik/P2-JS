class ArraySorter {
    static BubbleSort(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    let tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                }
            }
        }
        return arr;
    }

    static ChoiseSort(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            let minimum = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[minimum] > arr[j]) minimum = j;
            }
            let tmp = arr[minimum];
            arr[minimum] = arr[i];
            arr[i] = tmp;
        }
        return arr;
    }

    static InsertSort(arr) {
        for (let i = 1; i < arr.length; i++) {
            let j = i;
            while (j > 0 && arr[j] < arr[j - 1]) {
                let tmp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = tmp;
                j--;
            }
        }
        return arr;
    }

    static QuickSort(arr) {
        let sortfun = (left, right) => {
            if (left >= right) return;
            let L = left;
            let R = right;
            let M = arr[Math.trunc((left + right) / 2)];
            while (L < R) {
                while (arr[L] < M) L++;
                while (arr[R] > M) R--;
                if (L <= R) {
                    let tmp = arr[L];
                    arr[L] = arr[R];
                    arr[R] = tmp;
                    L++;
                    R--;
                }
            }
            sortfun(left, R);
            sortfun(L, right);
        }

        sortfun(0, arr.length - 1);
        return arr;
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

let node = document.querySelector(".array-sorter");
node.appendChild(Example('BubbleSort', ArraySorter.BubbleSort, [64, -15, 32, -9, -34]));
node.appendChild(Example('BubbleSort', ArraySorter.BubbleSort, [-8, -47, -64, -6, 18, 42, 35, -22, 29, 46]));
node.appendChild(Example('BubbleSort', ArraySorter.BubbleSort, [-3, -23, 44, 72, -98, -27,	-13, 41, -89, 0, -53, -1, -26, 83, 88, 54, 24, 44, 53, -1, 48, 72, -30, -29, 65]));

node.appendChild(Example('ChoiseSort', ArraySorter.ChoiseSort, [64, -15, 32, -9, -34]));
node.appendChild(Example('ChoiseSort', ArraySorter.ChoiseSort, [-8, -47, -64, -6, 18, 42, 35, -22, 29, 46]));
node.appendChild(Example('ChoiseSort', ArraySorter.ChoiseSort, [-3, -23, 44, 72, -98, -27,	-13, 41, -89, 0, -53, -1, -26, 83, 88, 54, 24, 44, 53, -1, 48, 72, -30, -29, 65]));

node.appendChild(Example('InsertSort', ArraySorter.InsertSort, [64, -15, 32, -9, -34]));
node.appendChild(Example('InsertSort', ArraySorter.InsertSort, [-8, -47, -64, -6, 18, 42, 35, -22, 29, 46]));
node.appendChild(Example('InsertSort', ArraySorter.InsertSort, [-3, -23, 44, 72, -98, -27,	-13, 41, -89, 0, -53, -1, -26, 83, 88, 54, 24, 44, 53, -1, 48, 72, -30, -29, 65]));

node.appendChild(Example('QuickSort', ArraySorter.QuickSort, [64, -15, 32, -9, -34]));
node.appendChild(Example('QuickSort', ArraySorter.QuickSort, [-8, -47, -64, -6, 18, 42, 35, -22, 29, 46]));
node.appendChild(Example('QuickSort', ArraySorter.QuickSort, [-3, -23, 44, 72, -98, -27,	-13, 41, -89, 0, -53, -1, -26, 83, 88, 54, 24, 44, 53, -1, 48, 72, -30, -29, 65]));

