$(document).ready(() => {
<<<<<<< HEAD
  // $("#example-multiple-selected").multiselect();
=======
>>>>>>> 9e8bfd1e8ec4e68d17e9860fb72fce08f4431e26
  const surveyForm = $("#survey-form");
  let ageFilter;
  // let choiceNums = "";

  surveyForm.on("submit", event => {
    event.preventDefault();
    const ageInput = $("#inputState").val();
    const genreInput = $("#genreInput").val();
    const typeInput = $("#typeInput").val();
    console.log(ageInput);
    console.log(genreInput);
    console.log(typeInput);
    if (ageInput >= 18) {
      ageFilter = "&include_adult=true";
    } else {
      ageFilter = "&include_adult=false";
    }
    // if (genreInput.length === 1) {
    //   choiceNums = "" + genreInput[0];
    // } else if (genreInput.length === 2) {
    //   choiceNums = "" + genreInput[0] + "," + genreInput[1];
    // } else if (genreInput.length === 3) {
    //   choiceNums =
    //     "" + genreInput[0] + "," + genreInput[1] + "," + genreInput[2];
    // } else if (genreInput.length > 3) {
    //   alert("Please select a MAXIMUM of 3 genres!");
    //   return;
    // } else if (genreInput.length < 1) {
    //   alert("Please select one, two, or three genres!");
    //   return;
    // }
    // console.log(choiceNums);
    console.log(ageFilter);

    $.ajax({
      url: "/api/movies/g/" + genreInput,
      method: "GET"
    }).then(results => {
      loadMovies(results);
    });
  });
});

function loadMovies(data) {
  let space = 10;

  $.get("/api/movielist").then(movieList => {
    const movieListIds = movieList.map(movie => movie.id);
    for (let i = 0; i < space; i++) {
      //if id throws an error in the db call (aka if the id matches any one already in the movie table, skip it), space++
      if (movieListIds.includes(data.results[i].id)) {
        space++;
        console.log("Skipping id " + data.results[i].id);
        continue;
      } else {
        //take data aka results and do an ajax post to the movie table using all the response arrays up to 10 index
        console.log(data.results[i]);
        $.post("/api/movielist", {
          title: data.results[i].title,
          id: data.results[i].id,
          genre: "" + data.results[i].genre_ids,
          backDrop:
            "http://image.tmdb.org/t/p/original" +
            data.results[i].backdrop_path,
          poster:
            "http://image.tmdb.org/t/p/original" + data.results[i].poster_path,
          releaseDate: data.results[i].release_date,
          description: data.results[i].overview
        })
          .then(() => {
            window.location.replace("/results");
          })
          .catch(err => {
            console.log(err);
          });
        // }
      }
      //this table is then loaded into the js for the results page later on
    }
  });
}
