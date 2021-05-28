
const FormatType = {"no": 0, "letter": 1, "word": 2, "sentence": 3};
function TextFormatter(text, maxStringSize = Infinity, maxStringNum = Infinity, formatType = FormatType.no) {
    let result;
    let stringNum;
    switch (formatType) {
        case FormatType.no:
            let size = maxStringSize;
            if (size === Infinity) size = text.length;
            result = text.substring(0, size);
            break;
        case FormatType.letter:
            stringNum = 0;
            result = '';
            for (let i = 0; i < text.length; i++) {
                result += text[i];
                if ((i + 1) % maxStringSize === 0) {
                    stringNum++;
                    if (stringNum == maxStringNum) break;
                    result += '\n';
                }
            }
            break;
        case FormatType.word:
        case FormatType.sentence:
            let lexemes = text.split((formatType === FormatType.sentence ? /(?<=[.!?])/ : /(?=\s)/));
            let currentLine = 0;
            stringNum = 0;
            result = '';
            console.log(lexemes);
            for (let i = 0; i < lexemes.length; i++) {
                if (currentLine + lexemes[i].length > maxStringSize) {
                    if (stringNum + 1 == maxStringNum) break;
                    if (currentLine != 0) {
                        stringNum++;
                        result += '\n';
                        lexemes[i] = lexemes[i].trim();
                        currentLine = 0;
                    }
                }
                result += lexemes[i];
                currentLine += lexemes[i].length;
            }
            break;
        default:
            result = null;
    }
    return result;
}

function Example(functionName, func, ...args) {
    let block = document.createElement('p');
    let functionArguments = '';
    for (let i = 0; i < args.length; i++) {
        if (i != 0) functionArguments += ', ';
        functionArguments += JSON.stringify(args[i]);
    }
    block.innerHTML = functionName + '(' + functionArguments + ') = ' + func(...args).replace(/\n/g, "<br>"); 
    return block;
}

let node = document.querySelector(".text-formatter");
node.appendChild(Example('TextFormatter', TextFormatter, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."));
node.appendChild(Example('TextFormatter', TextFormatter, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 1));
node.appendChild(Example('TextFormatter', TextFormatter, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 250));
node.appendChild(Example('TextFormatter', TextFormatter, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 100, 3, FormatType.letter));
node.appendChild(Example('TextFormatter', TextFormatter, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 100, 3, FormatType.word));
node.appendChild(Example('TextFormatter', TextFormatter, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 100, 3, FormatType.sentence));
node.appendChild(Example('TextFormatter', TextFormatter, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 1, 10, FormatType. word));
