let A  = [ -15, -45, 43, 23, -63, 69, 35, 19, 37, -52 ];

let greatestEven = 0;
let smallestOdd;
    for(let i =0; i< A.length; i++) {
    if(A[i]%2 === 0) {
        if(greatestEven < A[i]) {
            greatestEven = A[i];
        }
        
    } else {
        if(smallestOdd === undefined) {
            smallestOdd = A[i];
        }
        if(smallestOdd > A[i]) {
            smallestOdd = A[i]
        }
    }
}

console.log( greatestEven - smallestOdd  );