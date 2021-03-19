'use strict';

const personalMoveDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMoveDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (
      personalMoveDB.count == '' ||
      personalMoveDB.count == null ||
      isNaN(personalMoveDB.count)
    ) {
      personalMoveDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: function () {
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
  },
  detectPersonalLevel: function () {
    if (personalMoveDB.count < 10) {
      console.log('Посмотренно довольно мало фильмов');
    } else if (personalMoveDB.count >= 10 && personalMoveDB.count < 30) {
      console.log('Вы классический зритель');
    } else if (personalMoveDB.count >= 30) {
      console.log('Вы киноман');
    } else {
      console.log('Произошла ошибка');
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMoveDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMoveDB.privat) {
      personalMoveDB.privat = false;
    } else {
      personalMoveDB.privat = true;
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let gener = prompt(`Ваш любимый жанр ${i}`);

      if (gener === '' || gener === null) {
        console.log('Вы ввели некорректные данные или не ввели их вовсе');
        i--;
      } else {
        personalMoveDB.genres[i - 1] = gener;
      }
    }
    personalMoveDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },
};
