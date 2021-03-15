'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMoveDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 1; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMoveDB.movies[a] = b;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMoveDB.count < 10) {
    console.log('Посмотренно довольно мало фильмов');
  } else if (personalMoveDB.count >= 10 && personalMoveDB.count < 30) {
    console.log('Вы классический зритель');
  } else if (personalMoveDB.count >= 30) {
    console.log('Вы киноман');
  } else {
    console.log('Произошла ошибка');
  }
}

// detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMoveDB);
  }
}

showMyDB(personalMoveDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt('Ваш любимый жанр под номером');
  }
}

writeYourGenres();
