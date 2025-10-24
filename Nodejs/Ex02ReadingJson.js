const data = require('./movies.json'); //used to include a external JS based file in ur code

for(const movie of data){
    console.log(`${movie.Title} directed by ${movie.Director}`);
}