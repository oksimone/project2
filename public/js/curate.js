$(document).ready(() => {
  $("#example-multiple-selected").multiselect();
  const surveyForm = $("#survey-form");
  let completedSurvey = false;
  let ageFilter;
  const genreObjArr = [
    {
      name: "Action",
      id: 28
    },
    {
      name: "Action & Adventure",
      id: 10759
    },
    {
      name: "Adventure",
      id: 12
    },
    {
      name: "Animation",
      id: 16
    },
    {
      name: "Comedy",
      id: 35
    },
    {
      name: "Crime",
      id: 80
    },
    {
      name: "Documentary",
      id: 99
    },
    {
      name: "Drama",
      id: 18
    },
    {
      name: "Family",
      id: 10751
    },
    {
      name: "Kids",
      id: 10762
    },
    {
      name: "Fantasy",
      id: 14
    },
    {
      name: "History",
      id: 36
    },
    {
      name: "Horror",
      id: 27
    },
    {
      name: "Music",
      id: 10402
    },
    {
      name: "Mystery",
      id: 9648
    },
    {
      name: "News",
      id: 10763
    },
    {
      name: "Reality",
      id: 10764
    },
    {
      name: "Romance",
      id: 10749
    },
    {
      name: "Science Fiction",
      id: 878
    },
    {
      name: "Sci-Fi & Fantasy",
      id: 10765
    },
    {
      name: "Soap",
      id: 10766
    },
    {
      name: "Talk",
      id: 10767
    },
    {
      name: "TV Movie",
      id: 10770
    },
    {
      name: "Thriller",
      id: 53
    },
    {
      name: "War",
      id: 10752
    },
    {
      name: "War & Politics",
      id: 10768
    },
    {
      name: "Western",
      id: 37
    }
  ];
  let choiceNums = "";

  surveyForm.on("submit", function(event) {
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
    };
    if (genreInput.length = 1) {
      choiceNums = "" + genreInput[0];
    } else if (genreInput.length === 2) {
      choiceNums = "" + genreInput[0] + "," + genreInput[1];
    } else if (genreInput.length === 3) {
      choiceNums = "" + genreInput[0] + "," + genreInput[1] + "," + genreInput[2];
    } else if (genreInput.length > 3) {
      alert("Please select a MAXIMUM of 3 genres!");
      return;
    } else if (genreInput.length < 1) {
      alert("Please select one, two, or three genres!");
      return;
    }
    console.log(choiceNums);
    console.log(ageFilter);
    completedSurvey = true;
  });
});
