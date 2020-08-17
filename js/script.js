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

let numberOfFilms;

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

rememberMyFilms();

detectPersonalLevel();

writeYourGenres();

showMyDB(personalMovieDB.privat);

function start() {
    do {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');   
     } while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms));
    
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {

        let filmName = prompt('Один из последних просмотренных фильмов?', '');
    
        while (filmName === '' || filmName === null || filmName.length > 50) {
            filmName = prompt('Один из последних просмотренных фильмов?', '');
        }
    
        let filmScore = +prompt('На сколько оцените его?', '');
    
        while (filmScore === 0  || isNaN(numberOfFilms)) {
            filmScore = +prompt('На сколько оцените его?', '');
        }
    
        personalMovieDB.movies[filmName] = filmScore;
    }

}

function detectPersonalLevel() {
    if (personalMovieDB.count <= 10) {
        alert('Просмотрено давольно мало фильмов');
    }
    else if (personalMovieDB.count > 10 && (personalMovieDB.count <= 30)) {
        alert('Вы классический зритель');
    }
    else if (personalMovieDB.count > 30) {
        alert('Вы киноман');
    }
    else { alert('Произошла ошибка'); }
}

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1} ?`, ``);
    }
}