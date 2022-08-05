
function makeAverage(arrayValue, arraySize) {

    let sum = 0;

    for (i = 0; i < arraySize; i++) {
        sum += arrayValue[i];

    }


    averageMark = sum / arraySize;

    return averageMark;
}




const arrayValue = [60, 30, 60, 50, 55, 50, 60, 30, 40, 50, 60, 50, 40]

const arraySize = arrayValue.length;


// console.log(arrayValue, arraySize);

console.log(makeAverage(arrayValue, arraySize));