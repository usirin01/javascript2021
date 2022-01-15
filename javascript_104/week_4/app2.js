const personList = [
    {   firstName: "Joey",
        lastName: "Tribiani",
        age:29,
        salary: 2000.00
    },
    {   firstName: "Ross",
        lastName: "Geller",
        age:30,
        salary: 56000.00
    },
    {   firstName: "Rachel",
        lastName: "Green",
        age:29,
        salary: 48000.00
    }
];
let result = personList.filter((prs) => prs.salary > 50000);
console.log(result);

let result2 = personList
            .filter((person) => person.age > 29)
            .map((person) => person.firstName);

console.log(result2);            

   