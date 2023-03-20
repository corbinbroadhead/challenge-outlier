const outlier = (arr) => {
    let oddNumbers = [];
    let evenNumbers = [];
    let solution = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        } else {
            oddNumbers.push(arr[i]);
        }
    }
    if (oddNumbers.length > evenNumbers.length) {
        solution.push(evenNumbers[0])
    } else {
        solution.push(oddNumbers[0])
    }
    return solution;
}

let numArr = [1, 9, -5, 3, 8];
let numArr2 = [33, 14, 0, -88, 2002]
console.log(outlier(numArr));
console.log(outlier(numArr2));