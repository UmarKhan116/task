function sortDescending(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}


let array1 = [3, 2, 7, 4, 6, 9];
console.log(sortDescending(array1));

function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome("madam"));

function sumTwoLargest(arr) {
    if (arr.length < 2) {
        return null; // Or handle as appropriate
    }

    let firstMax = -Infinity;
    let secondMax = -Infinity;
    for (let num of arr) {
        if (num > firstMax) {
            secondMax = firstMax;
            firstMax = num;
        } else if (num > secondMax) {
            secondMax = num;
        }
    }

    return firstMax + secondMax;
}


let array3 = [3, 7, 1, 5, 11, 19];
console.log(sumTwoLargest(array3)); 

function mostRepeatedNumber(arr) {
    let count = {};
    for (let num of arr) {
        count[num] = (count[num] || 0) + 1;
    }

    let maxCount = 0;
    let mostRepeated = null;
    for (let num in count) {
        if (count[num] > maxCount) {
            maxCount = count[num];
            mostRepeated = num;
        }
    }

    return [mostRepeated, maxCount];
}

let array5 = [4, 3, 5, 6, 4, 7, 9, 2, 4, 6, 3, 4, 6, 3, 4, 8, 5, 1, 5];
console.log(mostRepeatedNumber(array5)); 

function rotateRight(arr) {
    if (arr.length === 0) {
        return arr;
    }
    let lastElement = arr.pop();
    arr.unshift(lastElement);
    return arr;
}

let array6 = [3, 8, 9, 7, 6];
console.log(rotateRight(array6)); 


function findMissingElements(arr) {
    if (arr.length === 0) {
        return [];
    }

    let highest = Math.max(...arr);
    let presence = new Array(highest + 1).fill(false); 

    for (let num of arr) {
        presence[num] = true;
    }

    let missingElements = [];

    for (let i = 0; i <= highest; i++) {
        if (!presence[i]) {
            missingElements.push(i);
        }
    }

    return missingElements;
}

let array = [3, 4, 9, 1, 7, 3, 2, 6];
console.log(findMissingElements(array)); 


