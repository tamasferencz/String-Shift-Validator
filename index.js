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

console.log(stringShiftValidator('details', 'tailsde')); // true
console.log(stringShiftValidator('limits', 'litims')); // false
console.log(stringShiftValidator('finals', 'inalsf')); // true
console.log(stringShiftValidator('abcde', 'abcde')); // true
console.log(stringShiftValidator('abc', 'abcd')); // false
console.log(stringShiftValidator('a', 'a')); // true
console.log(stringShiftValidator('a', 'b')); // false
console.log(stringShiftValidator('aaaaa', 'aaaaa')); // true
console.log(stringShiftValidator('hello', 'ohell')); // true
console.log(stringShiftValidator('ababab', 'bababa')); // true
console.log(stringShiftValidator('listen', 'silent')); // false
console.log(stringShiftValidator('abcde', 'abced')); // false
console.log(stringShiftValidator('ab', 'ba')); // true
console.log(stringShiftValidator('javascript', 'scriptjava')); // true
