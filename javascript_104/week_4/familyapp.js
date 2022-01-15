 const families = [
    {
       firstname: "Ahmet",
       lastname: "Kurnaz",
       partner: "Sevil",
       children: [
          {
             name: "Efe",
             age: 8,
             gender: "boy",
          },
          {
             name: "Ece",
             age: 6,
             gender: "girl",
          },
       ],
       salary: 4000,
    },
    {
       firstname: "Kemal",
       lastname: "Can",
       partner: "Elif",
       children: [
          {
             name: "Naz",
             age: 11,
             gender: "girl",
          },
          {
             name: "Kadir",
             age: 6,
             gender: "boy",
          },
       ],
       salary: 6000,
    },
    {
       firstname: "Zakir",
       lastname: "Cemal",
       partner: "Nida",
       children: [
          {
             name: "Hasan",
             age: 2,
             gender: "boy",
          },
          {
             name: "Hüseyin",
             age: 6,
             gender: "boy",
          },
       ],
       salary: 5500,
    },
    {
       firstname: "Murat",
       lastname: "Demirtas",
       partner: "Simay",
       children: [
          {
             name: "Oktay",
             age: 15,
             gender: "boy",
          },
          {
             name: "Gülsüm",
             age: 13,
             gender: "girl",
          },
       ],
       salary: 5300,
    },
    {
       firstname: "Umut",
       lastname: "Ilicak",
       partner: "Ayse",
       children: [
          {
             name: "Bilal",
             age: 8,
             gender: "boy",
          },
       ],
       salary: 3000,
    },
    {
       firstname: "Durmus",
       lastname: "Demir",
       partner: "Nur",
       children: [
          {
             name: "Meral",
             age: 4,
             gender: "girl",
          },
       ],
       salary: 7000,
    },
 ];
 /**
  * First function finds people who has salary over 5000,
  * Second function finds boys,
  * Third function finds girls,
  * Fourth function defines the children who are under eight,
  * Fifth function finds the children who are under eight's mothers name
  * Than the program is ended.
  */

 //* People who have salary over 5000 are found,
let salaryIsOverFiveThousand = 
    families
        .filter((people) => people.salary > 5000)
        .map((people) => people.firstname + " " + people.lastname)
        .sort();
console.log("People who has salary over 5000:",salaryIsOverFiveThousand);

// Boys are found,
let findToBoys = 
    families
        .map((pChildren) => pChildren.children
        .filter((pChildren) =>pChildren.gender == "boy")
        .map((pChildren)=> pChildren.name))
        .sort();
console.log("The kids who are boys:",findToBoys); 

//Girls are found,
let findToGirls = 
    families
        .map((pChildren) => pChildren.children
        .filter((pChildren) =>pChildren.gender == "girl")
        .map((pChildren)=> pChildren.name))
        .sort();
console.log("The kids who are girls:",findToGirls);

//The children who are under eight are found,
let findToChildrenUnderEigth = 
    families 
        .map((pChildren) => pChildren.children)
        .filter((pChildren) => pChildren.age < 8)
        .map((pChildren) => pChildren.name)
        .sort();
console.log("The children who are under eight:",findToGirls);



