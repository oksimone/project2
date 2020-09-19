$(document).ready(() => {
  $.get("/api/movielist").then(movieList => {
    console.log(movieList);
    $(".bgimg-2").css("background-image", `url(${movieList[0].poster})`);
    $(".bgimg-3").css("background-image", `url(${movieList[1].poster})`);
    $(".bgimg-4").css("background-image", `url(${movieList[2].poster})`);
    $(".bgimg-5").css("background-image", `url(${movieList[3].poster})`);
    $(".bgimg-6").css("background-image", `url(${movieList[4].poster})`);
    $(".bgimg-7").css("background-image", `url(${movieList[5].poster})`);
    $(".bgimg-8").css("background-image", `url(${movieList[6].poster})`);
    $(".bgimg-9").css("background-image", `url(${movieList[7].poster})`);
    $(".bgimg-10").css("background-image", `url(${movieList[8].poster})`);
    $(".bgimg-11").css("background-image", `url(${movieList[9].poster})`);
  });
});
