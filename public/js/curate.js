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
    });
  });
});
