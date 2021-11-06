
function findTwo    (A){

    let xorArray = getXORArray(A);
    let setBitPosition = findSetBitPosition(xorArray);
    let leftArray = [];
    let rightArray = [];
    let outputArray =[];
    for(let i = 0 ; i < A.length ; i++) {
        if(checkBit(A[i],setBitPosition)) {
            leftArray.push(A[i]);
        } else {
            rightArray.push(A[i]);
        }
    }
    
    outputArray.push(getXORArray(leftArray));
    outputArray.push(getXORArray(rightArray));

	}