$(document).ready(() => {
  const surveyForm = $("#survey-form");
  const dobInput = $("input#dob-input");
  const genreInput = $("input#genre-input");
  const typeInput = $("input#inputState");
  let completedSurvey = false;
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
  let choiceNums;
  const choiceArr = [];

  //checkbox functionality
  $(".checkbox-menu").on("change", "input[type='checkbox']", function() {
    $(this)
      .closest("li")
      .toggleClass("active", this.checked);
  });
  $(document).on("click", ".allow-focus", e => {
    e.stopPropagation();
  });

  surveyForm.on("submit", event => {
    event.preventDefault();
    console.log(genreInput);
    if (dobInput > 18) {
      // let dob = code for including adult movies
    } else {
      // let dob = code for not including adult movies
    }
    const genreDetails = genreObjArr.find(obj => obj.name === genreInput);
    const genreID = genreDetails.id;
    const surveyData = {
      dob: dob,
      genre: genreID
    };
    completedSurvey = true;
  });
});
