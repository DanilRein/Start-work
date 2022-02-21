"use strict"
let numberofthefilms;
function start(){
   while (numberofthefilms==''|| numberofthefilms==null||isNaN(numberofthefilms)) {
      numberofthefilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
   }
}
start();

const personalMovieDB = {
   count: numberofthefilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

function rememberMyFilms() {
   for (let i = 0; i < 2; i++) {
      const film = prompt('Один из последних просмотренных фильмов?', ''),
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
}

rememberMyFilms();

function detectPersonalLevel() {
   
if (personalMovieDB.count < 10) {
   console.log('нужно посмотреть больше фильмов');
   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('вы классический зритель');
   } else if (personalMovieDB.count > 30) {
      console.log('вы киноман');
   }   else {
    console.log('произошла ошибка');
   }
}
detectPersonalLevel();

function showMyDB(hidden){
   if (!hidden) {
      console.log(personalMovieDB);
   }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres(numberOfGenres) {
   for (let i=0; i < numberOfGenres; i++){
      personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
   }
}

writeYourGenres(4);