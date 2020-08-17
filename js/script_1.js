
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//console.log(numberOfFilms);


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const filmName = prompt('Один из последних просмотренных фильмов?', '');
const filmScore  = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[filmName] = filmScore;

console.log(numberOfFilms.movies);

