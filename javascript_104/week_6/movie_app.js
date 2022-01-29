let movieInformation = [
    {
       movieName: "I.T.",
       IMDB: 8.0,
       year: 2022,
       salary: 4,
    },
    {
        movieName: "Ip Man",
        IMDB: 8.2,
        year: 2010,
        salary: 5,
     },
     {
        movieName: "Kingdom of Heaven",
        IMDB: 8.5,
        year: 2005,
        salary: 4,
     },
     {
        movieName: "Pardon",
        IMDB: 9.1,
        year: 2002,
        salary: 5,
     },
]

let pointMovie = 
    movieInformation
        .filter((movie) => movie.IMDB > 9)
console.log("Movie who has IMDB point over 9:",pointMovie);