const books = [
    {
        bookTitle: "Cemile",
        authors: [{
            name: "Orhan",
            lastname: "Kemal",
            country: "Turkey"
        }],
        genre: "Drama",
        price: 13.70,
        lendTime: 15,
        amount: 12,
        lendedPeople: [
            {
                firstname: "Huseyin",
                lastname: "Kral Mentor",
                dateOfLend: "12.10.2021"
            }
        ]
    },
    {
        bookTitle: "Chang Ching Chong Hehe",
        authors: [{
            name: "Chu",
            lastname: "Lee",
            country: "China"
        }, {
            name: "Fhu",
            lastname: "Dragon",
            country: "China"
        }],
        genre: "Drama",
        price: 15.70,
        lendTime: 15,
        amount: 1,
        lendedPeople: [{
            firstname: "Huseyin",
            lastname: "Ciftatli",
            dateOfLend: "12.01.2022",
        },
        {
            firstname: "Bilal Said",
            lastname: "Ciledolu",
            dateOfLend: "11.01.2020",
        },
        {
            firstname: "Umut",
            lastname: "Gungor",
            dateOfLend: "15.8.2021",
        }]
    },
    {
        bookTitle: "Red Cross",
        authors: [{
            name: "Chu",
            lastname: "Lee",
            country: "China"
        }, {
            name: "Fhu",
            lastname: "Dragon",
            country: "China"
        }],
        genre: "Science Fiction",
        price: 18.70,
        lendTime: 15,
        amount: 22,
        lendedPeople: [{
            firstname: "Huseyin",
            lastname: "Atsiz",
            dateOfLend: "12.01.2022",
        },
        {
            firstname: "Bilal Said",
            lastname: "Kaygisiz",
            dateOfLend: "23.04.2020",
        },
        {
            firstname: "Mehmet",
            lastname: "Sekeroglu",
            dateOfLend: "23.04.2020",
        }]
    },
    {
        bookTitle: "Illimunati",
        authors: [{
            name: "Chu",
            lastname: "Lee",
            country: "China"
        }, {
            name: "Fhu",
            lastname: "Dragon",
            country: "China"
        }],
        genre: "Mystery",
        price: 18.70,
        lendTime: 15,
        amount: 3,
        lendedPeople: [{
            firstname: "Huseyin",
            lastname: "Atsiz",
            dateOfLend: "12.01.2022",
        },
        {
            firstname: "Bilal Said",
            lastname: "Kaygisiz",
            dateOfLend: "23.04.2020",
        },
        {
            firstname: "Mehmet",
            lastname: "Sekergibi",
            dateOfLend: "23.04.2020",
        }]
    },
    {
        bookTitle: "Das Verlorene Symbol",
        authors: [{
            name: "Chu",
            lastname: "Lee",
            country: "China"
        }, {
            name: "Fhu",
            lastname: "Dragon",
            country: "China"
        }],
        genre: "Mystery",
        price: 16.70,
        lendTime: 15,
        amount: 56,
        lendedPeople: [
            {
                firstname: "Huseyin",
                lastname: "Baskan",
                dateOfLend: "12.01.2022",
            },
            {
                firstname: "Bilal Said",
                lastname: "Kral Metor",
                dateOfLend: "23.04.2020",
            },
            {
                firstname: "Umut",
                lastname: "Gungorler",
                dateOfLend: "12.01.2022",
            },
            {
                firstname: "Erhan",
                lastname: "Soyadine",
                dateOfLend: "23.04.2020",
            }
        ]
    },
    {
        bookTitle: "Ask",
        authors: [{
            name: "Chu",
            lastname: "Lee",
            country: "China"
        }, {
            name: "Fhu",
            lastname: "Dragon",
            country: "China"
        }],
        genre: "Mystery",
        price: 17.70,
        lendTime: 15,
        amount: 32,
        lendedPeople: [{
            firstname: "Huseyin",
            lastname: "Bellissimo",
            dateOfLend: "12.07.2021",
        },
        {
            firstname: "Bilal Said",
            lastname: "Kaygisiz",
            dateOfLend: "23.04.2020",
        }]
    },
    {
        bookTitle: "Medyum",
        authors: [{
            name: "Chu",
            lastname: "Lee",
            country: "China"
        }, {
            name: "Fhu",
            lastname: "Dragon",
            country: "China"
        }],
        genre: "Mystery",
        price: 17.70,
        lendTime: 15,
        amount: 77,
        lendedPeople: []
    },
    {
        bookTitle: "Sadist",
        authors: [{
            name: "Chu",
            lastname: "Lee",
            country: "China"
        }, {
            name: "Fhu",
            lastname: "Dragon",
            country: "China"
        }],
        genre: "Mystery",
        price: 17.70,
        lendTime: 15,
        amount: 66,
        lendedPeople: [{
            firstname: "Huseyin",
            lastname: "Baskan",
            dateOfLend: "12.01.2022",
        },
        {
            firstname: "Bilal Said",
            lastname: "Kral Metor",
            dateOfLend: "23.04.2020",
        },
        {
            firstname: "Umut",
            lastname: "Gungorler",
            dateOfLend: "12.01.2022",
        },
        {
            firstname: "Erhan",
            lastname: "Soyadine",
            dateOfLend: "23.04.2020",
        }]
    },
    {
        bookTitle: "Institute",
        authors: [{
            name: "Chu",
            lastname: "Lee",
            country: "China"
        }, {
            name: "Fhu",
            lastname: "Dragon",
            country: "China"
        }],
        genre: "Mystery",
        price: 17.70,
        lendTime: 15,
        amount: 88,
        lendedPeople: [{
            firstname: "Huseyin",
            lastname: "Baskan",
            dateOfLend: "12.01.2022",
        },
        {
            firstname: "Bilal Said",
            lastname: "Kral Metor",
            dateOfLend: "23.04.2020",
        },
        {
            firstname: "Umut",
            lastname: "Gungorler",
            dateOfLend: "12.01.2022",
        },
        {
            firstname: "Erhan",
            lastname: "Soyadine",
            dateOfLend: "23.04.2020",
        }]
    },
    {
        bookTitle: "Da Vinci Code",
        authors: [{
            name: "Chu",
            lastname: "Lee",
            country: "China"
        }, {
            name: "Fhu",
            lastname: "Dragon",
            country: "China"
        }],
        genre: "Mystery",
        price: 17.70,
        lendTime: 15,
        amount: 3,
        lendedPeople: [{
            firstname: "Huseyin",
            lastname: "Baskan",
            dateOfLend: "12.01.2022",
        },
        {
            firstname: "Bilal Said",
            lastname: "Kral Metor",
            dateOfLend: "23.04.2020",
        },
        {
            firstname: "Umut",
            lastname: "Gungorler",
            dateOfLend: "12.01.2022",
        },
        {
            firstname: "Erhan",
            lastname: "Soyadine",
            dateOfLend: "23.04.2020",
        }]
    },
    {
        bookTitle: "Inferno",
        authors: [{
            name: "Chu",
            lastname: "Lee",
            country: "China"
        }, {
            name: "Fhu",
            lastname: "Dragon",
            country: "China"
        }],
        genre: "Mystery",
        price: 17.70,
        lendTime: 15,
        amount: 19,
        lendedPeople: [{
            firstname: "Huseyin",
            lastname: "Baskan",
            dateOfLend: "12.01.2022",
        },
        {
            firstname: "Bilal Said",
            lastname: "Kral Metor",
            dateOfLend: "23.04.2020",
        },
        {
            firstname: "Umut",
            lastname: "Gungorler",
            dateOfLend: "12.01.2022",
        },
        {
            firstname: "Erhan",
            lastname: "Soyadine",
            dateOfLend: "23.04.2020",
        }]
    },
    {
        bookTitle: "Cali Kusu",
        authors: [{
            name: "Chu",
            lastname: "Lee",
            country: "China"
        }, {
            name: "Fhu",
            lastname: "Dragon",
            country: "China"
        }],
        genre: "Drama",
        price: 17.70,
        lendTime: 15,
        amount: 12,
        lendedPeople: [{
            firstname: "Huseyin",
            lastname: "Baskan",
            dateOfLend: "12.01.2022",
        },
        {
            firstname: "Bilal Said",
            lastname: "Kral Metor",
            dateOfLend: "23.04.2020",
        },
        {
            firstname: "Umut",
            lastname: "Gungorler",
            dateOfLend: "12.01.2022",
        },
        {
            firstname: "Erhan",
            lastname: "Soyadine",
            dateOfLend: "23.04.2020",
        }]
    },
    {
        bookTitle: "The Shining",
        authors: [{
            name: "Chu",
            lastname: "Lee",
            country: "China"
        }, {
            name: "Fhu",
            lastname: "Dragon",
            country: "China"
        }],
        genre: "Horror",
        price: 17.70,
        lendTime: 15,
        amount: 121,
        lendedPeople: [{
            firstname: "Huseyin",
            lastname: "Baskan",
            dateOfLend: "12.01.2022",
        },
        {
            firstname: "Bilal Said",
            lastname: "Kral Metor",
            dateOfLend: "23.04.2020",
        },
        {
            firstname: "Umut",
            lastname: "Gungorler",
            dateOfLend: "12.01.2022",
        },
        {
            firstname: "Erhan",
            lastname: "Soyadine",
            dateOfLend: "23.04.2020",
        }]
    },
    {
        bookTitle: "1984",
        authors: [{
            name: "Chu",
            lastname: "Lee",
            country: "China"
        }, {
            name: "Fhu",
            lastname: "Dragon",
            country: "China"
        }],
        genre: "Political",
        price: 19.70,
        lendTime: 15,
        amount: 43,
        lendedPeople: [{
            firstname: "Huseyin",
            lastname: "Baskan",
            dateOfLend: "12.01.2022",
        },
        {
            firstname: "Bilal Said",
            lastname: "Kral Metor",
            dateOfLend: "23.04.2020",
        },
        {
            firstname: "Umut",
            lastname: "Gungorler",
            dateOfLend: "12.01.2022",
        },
        {
            firstname: "Erhan",
            lastname: "Soyadine",
            dateOfLend: "23.04.2020",
        }]
    },
    {
        bookTitle: "Missing Sister",
        authors:[{
            name: "Chu",
            lastname: "Lee",
            country: "China"
        }, {
            name: "Fhu",
            lastname: "Dragon",
            country: "China"
        }],
        genre: "Romance",
        price: 11.70,
        lendTime: 15,
        amount: 12,
        lendedPeople: [{
            firstname: "Huseyin",
            lastname: "Baskan",
            dateOfLend: "12.01.2022",
        },
        {
            firstname: "Bilal Said",
            lastname: "Kral Metor",
            dateOfLend: "23.04.2020",
        },
        {
            firstname: "Umut",
            lastname: "Gungorler",
            dateOfLend: "12.01.2022",
        },
        {
            firstname: "Erhan",
            lastname: "Soyadine",
            dateOfLend: "23.04.2020",
        }]
    }
]


/** Fragment */
function createBookFragment(bookList){
    return bookList.map((book) => `
        <tr>
            <td>${book.bookTitle}</td>
            <td>
                <ul>
                    ${createAuthoFragment(book.authors)}
                </ul>
            </td>
            <td>${book.genre}</td>
            <td>${book.price}</td>
            <td>${book.amount}</td>
            <td>
                <ul>
                    ${createLandedFragment(book.lendedPeople)}
                </ul>
            </td>

        </tr>
    `).join("" )  
}

function createAuthoFragment(authorList){
    return authorList.map((author) => `
            <li> ${author.name} ${author.lastname} ${author.country}</li>
    `).join("" )  
}

function createLandedFragment(landedList){
    return landedList.map((landedPeople) => `
            <li> ${landedPeople.firstname} ${landedPeople.lastname}</li>
    `).join("" )  
}

function createHeaderFragment(){
    return `
        <tr>
            <th>Name</th>
            <th>Genre</th>
            <th>Price</th>
            <th>Amount</th>
        </tr>
    `;
}

function createTableFragment(bookList){
    return `
        <table>
            ${createHeaderFragment()}

            ${createBookFragment(bookList)}
        </table>
    `;
}

function render(bookList){
    document.querySelector("#app").innerHTML = createTableFragment(bookList);
}

// main call
render(books);