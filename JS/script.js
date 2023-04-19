'use strict';
let numberOfFilms = confirm('вы уже посмотрели фильм?'),
    personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };
personalMovieDB['movies'][prompt('film name','')] = prompt('rate','');
console.log(personalMovieDB);

