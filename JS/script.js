'use strict';
let numberOfFilms, 
    personalMovieDB = {};

function start () {
    let numberOfFilms = ''
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
    return +numberOfFilms;
}

function detectPersonalLevel(numberOfFilms) {
    if (numberOfFilms > 50) {
        alert('Вы киноман')
    } else if (numberOfFilms < 10) {
        alert('Просмотренно довольно мало фильмов')
    } else {
        alert('Вы классический зритель')
    }
}

function showMyDB () {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB)
    }    
}

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
       personalMovieDB.genres.push(prompt(`Вашь любимый жанр номер ${i}`))
    }
}

numberOfFilms = start(numberOfFilms)


detectPersonalLevel(numberOfFilms)


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


writeYourGenres()

showMyDB()

