'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMoveDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
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

if (personalMoveDB.count < 10) {
  console.log('Посмотренно довольно мало фильмов');
} else if (personalMoveDB.count >= 10 && personalMoveDB.count < 30) {
  console.log('Вы классический зритель');
} else if (personalMoveDB.count >= 30) {
  console.log('Вы киноман');
} else {
  console.log('Произошла ошибка');
}

console.log(personalMoveDB);
