const person = {
    firstname: "Thomas",
    lastname: "Meier",
    age: 36,
    salary: 112000.00,
    isMarried: false,
    children: [ "Miriam", "Hannes", "Jurg"],
    address: {
        street: "Musterstr. 3",
        zipCode: "6785",
        city: "Zürich",
        country: "Switzerland"
    },
    hasChildren (){
        return this.children !== null
        &&this.children.length > 0;
    }}
console.log(person.salary);
console.log("Has this guy children", person.hasChildren());

