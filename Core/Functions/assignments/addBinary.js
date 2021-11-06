function addBinary(A, B){
    let maxSize = getMaxStringSize(A,B);
    let binaryArrayA = makeNumberArrayForSize(A,maxSize);
    let binaryArrayB = makeNumberArrayForSize(B,maxSize);
    
    return addNumberArray(binaryArrayA,binaryArrayB);
    
}

function getMaxStringSize(A,B) {
    if(A.length > B.length) {
        return A.length;
    }
    return B.length;
}

function makeNumberArrayForSize(A,numSize) {
    let returnArray = [];
    let sizeA = A.length;
    for(let i = numSize - 1; i >= 0; i--) {
        if(sizeA > 0) {
            sizeA--;
            returnArray[i] = parseInt(A[sizeA]);
        } else {
            returnArray[i] = 0;
        }
        
    }
    return returnArray;
}

function addNumberArray(A,B) {
let sumBinary = [];
let carry = 0;
    for(let i = A.length - 1; i >= 0; i--) {
        let sumBits =  addBits(carry,A[i],B[i]);
        carry = sumBits[0];
        sumBinary[i] = sumBits[1]; 
    }
    if(carry) 
    return carry + sumBinary.join("");
    return sumBinary.join("");
}

function addBits(carry,A,B) {
    let output = [];
    output.push(parseInt((carry+A+B)/2));
    output.push((carry+A+B)%2);
    return output;
}

let A = "1010110111001101101000";
let B = "1000011011000000111100110";
console.log(addBinary(A,B));