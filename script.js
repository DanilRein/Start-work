"use strict"
let numberofthefilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
   count: numberofthefilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};
if (personalMovieDB.count < 10) {
   console.log('нужно посмотреть больше фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('вы классический зритель');
} else if (personalMovieDB.count > 30) {
      console.log('вы киноман');
}   else {
         console.log('произошла ошибка');
}
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
console.log(personalMovieDB);

         
//    }
// }
// for (let i = 0; i < 2; i++) {
//    let film = prompt('Один из последних просмотренных фильмов?', '');
//    if (0<film.length<=10) {
//       let mark = prompt('На сколько вы его оцените?', '');
//       if (0 < mark.length <= 10) {
//          personalMovieDB.movies[film] = mark;
//          console.log(personalMovieDB);
//       }
//       else
//          continue;
//    }
//    else {
//          i--;
//          continue;
//       }
// }
//  secondLast = prompt('Один из последних просмотренных фильмов?', ''),
//  markSecond = prompt('На сколько вы его оцените?', '');
// personalMovieDB.movies[firstLast] = markFirst;
// personalMovieDB.movies[secondLast] = markSecond;
// console.log(personalMovieDB);


