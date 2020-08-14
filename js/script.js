"use strict";


// alert('Hello');

// const result = confirm("Are you here?");

// console.log(result);

// const answer = +prompt("Вам есть 18?", "18");
// console.log(typeof(answer));

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// document.write(answers);

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = 'Ivan';

// alert(`Hello, ${user}`);

// console.log(4 + +'5');

// let incr = 10,
//     decr = 10;

// // ++incr;
// // --decr;

// console.log(++incr); 
// console.log(--decr); 


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//console.log(numberOfFilms);


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const filmName = prompt('Один из последнихосмотренных фильмов?', '');
    const filmScore  = prompt('На сколько оцените его?', '');
    personalMovieDB.movies[filmName] = filmScore;
}

console.log(personalMovieDB);