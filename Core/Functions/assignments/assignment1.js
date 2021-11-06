function nextLargerNumber(number)
{
    var arrStrNumber = (number+ "").split("");
    var arrNumber = arrStrNumber.map((x)=> parseInt(x));
    var needsPromotionLocation = 0;
    var nextLargerDigitLocation = 0;
    
    //  Finding the needs Promotion Location
    for(let i = arrNumber.length -1; i  > 0 ; i --) {
    if(arrNumber[i] > arrNumber[i -1])
        needsPromotionLocation = i -1;
        break;
    }
    
    // Find the next larger digit
    for (let j = needsPromotionLocation +1; j < arrNumber.length; j++) {
        if(arrNumber[j] > arrNumber[needsPromotionLocation]) {
            nextLargerDigitLocation = j; 
        }
        if (arrNumber[nextLargerDigitLocation] < arrNumber[j] && arrNumber[nextLargerDigitLocation] > arrNumber[needsPromotionLocation] ) {
            nextLargerDigitLocation  = j;
        }
    }
    
    // Swap digits
    
    var temp = arrNumber[needsPromotionLocation];
    
    arrNumber[needsPromotionLocation] = arrNumber[nextLargerDigitLocation];
    arrNumber[nextLargerDigitLocation] = temp; 
    
    //  Arrange other digits to right in ascending order
    
    for( let k = needsPromotionLocation + 1; k < arrNumber.length; k++) {
        var temp2 = arrNumber[k];
        for (let l = needsPromotionLocation + 1 ; l < arrNumber.length; l++ ) {
            if( arrNumber[k] > arrNumber[l]) {
                arrNumber[k] = arrNumber[l];
                arrNumber[l] = temp2;
            }
        }
    }
    
    return arrNumber;
}
console.log(nextLargerNumber(3904));