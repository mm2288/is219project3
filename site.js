/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/


const vue_app = new Vue({
      el: '#vue_app',
      // This automatically imports your movies.json file and puts it into
      //   the variable: movies
      created () {
            fetch('movies.json').then(response => response.json()).then(json => {
                  this.movies = json
            })
      },
      data: {
            // This holds your movies.json data.
            movies: [],

            //poster: <img :src="movies[0].poster[0]">

            //imageinfo: return movies[0].posterIndex,

            //title: return movies[0].title + ' ' + movies[0]country,

            //score: return staricon + movies[0].iscore,

            //runtime: return movies[0].runtime,

            //released: return movies[0].released + ' ' + movies[0].rating

            //websites: return movies[0].imdb + ' ' + movies[0].website,

            //likes: thumbsup + movies[0].likes,

            //dislikes: thumbsdown + movies[0].dislikes
            /*{
              poster: this.movies[0].poster[0]
            }*/


            /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
            title: "IMDB + Megan's Top 8 Movies",

            owner: 'Megan Machado',

            github: href='https://github.com/mm2288/is219project3'

      },


      methods: {
            /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */

            /*getMonthText(dateArray) {

            },*/

            like: function (index) {
              this.movies[index].likes++;
            },

            dislike: function (index) {
              this.movies[index].dislikes--;
            },

            posterClick: function (index) {
              if (this.movies[index].posterindex == this.movies[index].posters.length - 1) {
                this.movies[index].posterindex = 0;
              }
              else {
                this.movies[index].posterindex++;
              }
            },

            timeText: function(minutes) {
              return (Math.floor(minutes/60) + "h " + minutes%60 + "m");
            }
      }
})
