// Function is a object
function mayBeObject() {
    console.log("Inside function");
}
console.log(mayBeObject); // 
console.log(typeof mayBeObject); // Function

// Not allowed Function expression
// gives Uncaught SyntaxError: Function statements require a function name
/*
function () {
    return 1;
}
*/

// Below is allowed
(function () {
    return 1;
});

// Immediately invoked function
(function () {
    console.log("testing the IIFE");
})();

// Function Expression

var funcExpression = function() {
    console.log("This is the function expression");
}

funcExpression();
console.log(funcExpression);


// Constructor function

function Employee(name) {
    let self = this;
    return {
        fullName:name,
        getName: function(){ 
            console.log(`Function Expression - this`);
            console.log(this);
            return this.fullName;
        },
        getfName: () => {
            console.log(`Arrow Function :this`);
            console.log(this);
            console.log();

            return self.getfName;
        }
    };
    
}

var emp = new Employee("Rohit");
console.log(emp.getName());
console.log(emp.getfName());