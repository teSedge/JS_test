'use strict';
let numberOfFilms, 
    personalMovieDB = {};

do {
    numberOfFilms = '';
    numberOfFilms = prompt('Сколько фильмов вы посмотрели?');
    if (numberOfFilms === '' || numberOfFilms === null) {
        alert('Ошибка. Попробуйте снова');
        continue;
    }
    numberOfFilms = +numberOfFilms;
    if (isNaN(numberOfFilms) || numberOfFilms < 0) {
        alert('Ошибка. Попробуйте снова');
        continue;
    } else {
        break;
    }
} while (true);

if (numberOfFilms > 50) {
    alert('Вы киноман')
} else if (numberOfFilms < 10) {
    alert('Просмотренно довольно мало фильмов')
} else {
    alert('Вы классический зритель')
}


personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let film, rate;

for (let i = 0; i < 2; i++) {
    
    do {
        film = prompt('Название фильма','');
        if (film === '' || film === null || film.length > 50) {
            alert('Ошибка. Попробуйте снова');
            continue;
        } else {
            break;
        }
    } while (true);
    do {
        rate = prompt('Оцкека','');
        if (rate === '' || rate === null) {
            alert('Ошибка. Попробуйте снова');
            continue;
        } else {
            break;
        }
    } while (true);
    personalMovieDB['movies'][film] = rate;
}


    


console.log(personalMovieDB);

