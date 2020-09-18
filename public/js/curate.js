$(document).ready(() => {
  $("#example-multiple-selected").multiselect();
  const surveyForm = $("#survey-form");
  let completedSurvey = false;
  let ageFilter;
  let choiceNums = "";

  surveyForm.on("submit", event => {
    event.preventDefault();
    const ageInput = $("#inputState").val();
    const genreInput = $("#example-multiple-selected").val();
    const typeInput = $("#typeInput").val();
    console.log(ageInput);
    console.log(genreInput);
    console.log(typeInput);
    if (ageInput >= 18) {
      ageFilter = "&include_adult=true";
    } else {
      ageFilter = "&include_adult=false";
    }
    if (genreInput.length === 1) {
      choiceNums = "" + genreInput[0];
    } else if (genreInput.length === 2) {
      choiceNums = "" + genreInput[0] + "," + genreInput[1];
    } else if (genreInput.length === 3) {
      choiceNums =
        "" + genreInput[0] + "," + genreInput[1] + "," + genreInput[2];
    } else if (genreInput.length > 3) {
      alert("Please select a MAXIMUM of 3 genres!");
      return;
    } else if (genreInput.length < 1) {
      alert("Please select one, two, or three genres!");
      return;
    }
    console.log(choiceNums);
    console.log(ageFilter);
    // User.completedSurvey = true;

    $.ajax({
      url: "/api/movies/g/" + choiceNums,
      method: "GET"
    }).then(results => {
      console.log(results);
      loadMovies(results);
    });
  });
});

function loadMovies(data) {
  let space = 10;
  console.log(data.results);
  for (let i = 0; i < space; i++) {
    //if id throws an error in the db call (aka if the id matches any one already in the movie table, skip it), space++
    // if (data.results[i].id === one of the id's in the movies table) {
    //   space++;
    //   i++;
    // } else {
    //take data aka results and do an ajax post to the movie table using all the response arrays up to 10 index
    console.log(data.results[i]);
    $.post("api/movielist", {
      title: data.results[i].title,
      id: data.results[i].id,
      genre: "" + data.results[i].genre_ids,
      backDrop: "http://image.tmdb.org/t/p/original" + data.results[i].backdrop_path,
      poster: "http://image.tmdb.org/t/p/original" + data.results[i].poster_path
    });
    // }
  }
  //this table is then loaded into the js for the results page later on
}
