$(document).ready(() => {
  $.get("/api/movielist").then(movieList => {
    console.log(movieList);
    $(".bgimg-1").css("background-image", `url(${movieList[0].poster})`)
  });
});
