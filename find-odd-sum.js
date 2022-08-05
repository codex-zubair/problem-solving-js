function findOddSum(number) {

    OddSum = 0;

    for (i = 0; i < number.length; i++) {
        if (number[i] % 2 == 1) {
            {

                OddSum += number[i];
            }
        }
    }

    return OddSum;

}

numbers = [202, 343, 454, 656, 56, 57, 2342, 12, 232, 23];

console.log(findOddSum(numbers));