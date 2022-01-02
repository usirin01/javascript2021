266 / 5,000
// First, the salary determination in the given array
// Second, getting only numbers from the array
// Adding to the newly created array
// Calculating company support
// Print the result and finish the program 

// The given array for Fikret's notebook

let incomeStatement = [15000, 2000, 1000, 300, 200,
    "important electronic", 600, 79, 
    "abo", 342, "printer",450, 32, 45, 
    "fitness", 64, 10, 23, 12, 2, 56, 7];

// calculting the salary of Fikret

let fikretpayment = incomeStatement[0];

function findNumber(pNumber){
    return pNumber.filter(x => typeof x === "number");
}

const numbers = findNumber(incomeStatement);

//

let total = 0;
numbers.map((element) => total += Number(element));

//variable determining

let mountlyexpense = total - fikretpayment;
let lastmoney = fikretpayment - mountlyexpense;

//calculating of company supporting

let companysupport = mountlyexpense/5;

//showing to the console

console.log(fikretpayment,"fikret's mountly amount");
console.log(mountlyexpense,"total mountly expense");
console.log(companysupport, "support of company");
console.log(lastmoney, "last money after every mounth");








