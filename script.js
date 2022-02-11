"use strict"
const numberofthefilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
   count: numberofthefilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};
const firstLast = prompt('Один из последних просмотренных фильмов?', ''),
 markFirst = prompt('На сколько вы его оцените?', ''),
 secondLast = prompt('Один из последних просмотренных фильмов?', ''),
 markSecond = prompt('На сколько вы его оцените?', '');
personalMovieDB.movies[firstLast] = markFirst;
personalMovieDB.movies[secondLast] = markSecond;
console.log(personalMovieDB);

