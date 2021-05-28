class ArrayProcessingTool {
    static SubsumSlow(arr) {
        let result = 0;
        for (let i = 0; i < arr.length; i++) {
            let sum = 0;
            for (let j = i; j < arr.length; j++) {
                sum += arr[j];
                if (result < sum) result = sum;
            }
        }
        return result;
    }

    static Subsum(arr) {
        return 0;
    }
    
    static SearchMin(arr) {
        let min = Infinity;
        for (let i = 0; i < arr.length; i++) {
            if (min > arr[i]) min = arr[i];
        }
        return min;
    }
    
    static SearchMax(arr) {
        let max = -Infinity;
        for (let i = 0; i < arr.length; i++) {
            if (max < arr[i]) max = arr[i];
        }
        return max;
    }

    static SearchMedian(arr) {
        arr.sort((left, right) => left < right);
        if (arr.length & 1) return arr[Math.trunc(arr.length / 2)];
        return (arr[Math.trunc(arr.length / 2)] + arr[Math.trunc(arr.length / 2) - 1]) / 2;
    }


    static SelectionTask(arr) {
        let left = 0;
        let right = 0;
        let best = 0;
        let bestSize = 1;
        while (right < arr.length - 1) {
            if (arr[right] <= arr[right + 1]) {
                right++;
            } else {
                left = ++right
            }
            if (right - left + 1 > bestSize) {
                bestSize = right - left + 1;
                best = left;
            }
        }
        return {"start": best, "length": bestSize};
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

let node = document.querySelector(".ArrayProcessingTool");
// SubSumSlow
node.appendChild(Example('SubsumSlow', ArrayProcessingTool.SubsumSlow, [-1, 2, 3, -9]));
node.appendChild(Example('SubsumSlow', ArrayProcessingTool.SubsumSlow, [2, -1, 2, 3, -9]));
node.appendChild(Example('SubsumSlow', ArrayProcessingTool.SubsumSlow, [-1, 2, 3, -9, 11]));
node.appendChild(Example('SubsumSlow', ArrayProcessingTool.SubsumSlow, [-2, -1, 1, 2]));
node.appendChild(Example('SubsumSlow', ArrayProcessingTool.SubsumSlow, [100, -9, 2, -3, 5]));
node.appendChild(Example('SubsumSlow', ArrayProcessingTool.SubsumSlow, [1, 2, 3]));
node.appendChild(Example('SubsumSlow', ArrayProcessingTool.SubsumSlow, [-1, -2, -3]));

// SubSum
node.appendChild(Example('Subsum', ArrayProcessingTool.Subsum, [-1, 2, 3, -9]));
node.appendChild(Example('Subsum', ArrayProcessingTool.Subsum, [2, -1, 2, 3, -9]));
node.appendChild(Example('Subsum', ArrayProcessingTool.Subsum, [-1, 2, 3, -9, 11]));
node.appendChild(Example('Subsum', ArrayProcessingTool.Subsum, [-2, -1, 1, 2]));
node.appendChild(Example('Subsum', ArrayProcessingTool.Subsum, [100, -9, 2, -3, 5]));
node.appendChild(Example('Subsum', ArrayProcessingTool.Subsum, [1, 2, 3]));
node.appendChild(Example('Subsum', ArrayProcessingTool.Subsum, [-1, -2, -3]));

// SearchMin
node.appendChild(Example('SearchMin', ArrayProcessingTool.SearchMin, [-1, 2, 3, -9]));
node.appendChild(Example('SearchMin', ArrayProcessingTool.SearchMin, [2, -1, 2, 3, -9]));
node.appendChild(Example('SearchMin', ArrayProcessingTool.SearchMin, [-1, 2, 3, -9, 11]));
node.appendChild(Example('SearchMin', ArrayProcessingTool.SearchMin, [-2, -1, 1, 2]));
node.appendChild(Example('SearchMin', ArrayProcessingTool.SearchMin, [100, -9, 2, -3, 5]));
node.appendChild(Example('SearchMin', ArrayProcessingTool.SearchMin, [1, 2, 3]));
node.appendChild(Example('SearchMin', ArrayProcessingTool.SearchMin, [-1, -2, -3]));

// SearchMax
node.appendChild(Example('SearchMax', ArrayProcessingTool.SearchMax, [-1, 2, 3, -9]));
node.appendChild(Example('SearchMax', ArrayProcessingTool.SearchMax, [2, -1, 2, 3, -9]));
node.appendChild(Example('SearchMax', ArrayProcessingTool.SearchMax, [-1, 2, 3, -9, 11]));
node.appendChild(Example('SearchMax', ArrayProcessingTool.SearchMax, [-2, -1, 1, 2]));
node.appendChild(Example('SearchMax', ArrayProcessingTool.SearchMax, [100, -9, 2, -3, 5]));
node.appendChild(Example('SearchMax', ArrayProcessingTool.SearchMax, [1, 2, 3]));
node.appendChild(Example('SearchMax', ArrayProcessingTool.SearchMax, [-1, -2, -3]));

// SearchMedian
node.appendChild(Example('SearchMedian', ArrayProcessingTool.SearchMedian, [-1, 2, 3, -9]));
node.appendChild(Example('SearchMedian', ArrayProcessingTool.SearchMedian, [2, -1, 2, 3, -9]));
node.appendChild(Example('SearchMedian', ArrayProcessingTool.SearchMedian, [-1, 2, 3, -9, 11]));
node.appendChild(Example('SearchMedian', ArrayProcessingTool.SearchMedian, [-2, -1, 1, 2]));
node.appendChild(Example('SearchMedian', ArrayProcessingTool.SearchMedian, [100, -9, 2, -3, 5]));
node.appendChild(Example('SearchMedian', ArrayProcessingTool.SearchMedian, [1, 2, 3]));
node.appendChild(Example('SearchMedian', ArrayProcessingTool.SearchMedian, [-1, -2, -3]));

