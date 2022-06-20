"use strict";
const personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
   start: function () {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
      while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
      }
      personalMovieDB.count = personalMovieDB.count;
   },
   rememberMyFilms:function() {
      for (let i = 0; i < 2; i++) {
         const film = prompt('Один из последних просмотренных фильмов?', '').trim(),
            mark = prompt('На сколько вы его оцените?', '');
         if (film != null && mark != null && film != '' && mark != '' && film.length < 50 && mark.length < 50) {
            personalMovieDB.movies[film] = mark;
            console.log('done');
         }
         else {
            console.log('error');
            i--;
         }
      }
   },
   detectPersonalLevel:function() {
      if (personalMovieDB.count < 10) {
         console.log('Вам нужно посмотреть больше фильмов');
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
      } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
      }   else {
          console.log('Произошла ошибка');
      }
   },
   showMyDB:function(hidden) {
      if (!hidden) {
         console.log(personalMovieDB);
      }
   },
   toggleVisibleMyDB: function () {
      if (personalMovieDB.privat)
         personalMovieDB.privat = false;
      else personalMovieDB.privat = true;
   },
   writeYourGenres:function() {
      for (let i = 0; i < 1; i++){
         // let genre = prompt(`Ваш любимый жанр под номером ${i + 1}?`);
         // if (genre == '' || genre == null) {
         //    console.log('Вы ввели некорректные данные или не ввели их вовсе');
         //    i--;
         // }
         // else {
         //    personalMovieDB.genres[i] = genre;
         // }
         let genre = prompt(`Введите ваши любимые жанры через запятую`); //Другой способ
         if (genre == '' || genre == null) {
            console.log('Вы ввели некорректные данные или не ввели их вовсе');
            i--;
         }
         else {
            personalMovieDB.genres.trim = genre.split(', ');
            personalMovieDB.genres.sort(); // Немного собьётся нумерация
         }
      }
      personalMovieDB.genres.forEach(function (item, i) {
         console.log(`Любимый жанр №${i+1} - это ${item}`);
      });
   },
};
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyDB(personalMovieDB.private);
// personalMovieDB.writeYourGenres();