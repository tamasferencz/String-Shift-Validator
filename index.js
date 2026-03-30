function stringShiftValidator(orig, final){
    const charArr = orig.split('');

    if(orig === final){
        return true;
    }

    for(let i = 0; i < charArr.length; i++){
        const firstElement = charArr.shift();
        charArr.push(firstElement);
        //console.log(charArr);

        if(charArr.join('') === final){
            return true;
        }
    }
    return false;
}

function stringShiftValidator2(orig, final){
     return orig.length === final.length && orig.concat(orig).includes(final);
}

// Test cases for first & second solution
console.log(stringShiftValidator('details', 'tailsde') + ", expected: true"); // true
console.log(stringShiftValidator('limits', 'litims') + ", expected: false"); // false
console.log(stringShiftValidator('finals', 'inalsf') + ", expected: true"); // true
console.log(stringShiftValidator('abcde', 'abcde') + ", expected: true"); // true
console.log(stringShiftValidator('abc', 'abcd') + ", expected: false"); // false
console.log(stringShiftValidator('a', 'a') + ", expected: true"); // true
console.log(stringShiftValidator('a', 'b') + ", expected: false"); // false
console.log(stringShiftValidator2('aaaaa', 'aaaaa') + ", expected: true"); // true
console.log(stringShiftValidator2('hello', 'ohell') + ", expected: true"); // true
console.log(stringShiftValidator2('ababab', 'bababa') + ", expected: true"); // true
console.log(stringShiftValidator2('listen', 'silent') + ", expected: false"); // false
console.log(stringShiftValidator2('abcde', 'abced') + ", expected: false"); // false
console.log(stringShiftValidator2('ab', 'ba') + ", expected: true"); // true
console.log(stringShiftValidator2('javascript', 'scriptjava') + ", expected: true"); // true
