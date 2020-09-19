$(document).ready(() => {
  $.get("/api/searchresults").then(movieList => {
    console.log(movieList);
    $(".bgimg-2").css("background-image", `url(${movieList[0].backDrop})`);
    $(".bgimg-3").css("background-image", `url(${movieList[1].backDrop})`);
    $(".bgimg-4").css("background-image", `url(${movieList[2].backDrop})`);
    $(".bgimg-5").css("background-image", `url(${movieList[3].backDrop})`);
    $(".bgimg-6").css("background-image", `url(${movieList[4].backDrop})`);
    $(".bgimg-7").css("background-image", `url(${movieList[5].backDrop})`);
    $(".bgimg-8").css("background-image", `url(${movieList[6].backDrop})`);
    $(".bgimg-9").css("background-image", `url(${movieList[7].backDrop})`);
    $(".bgimg-10").css("background-image", `url(${movieList[8].backDrop})`);
    $(".bgimg-11").css("background-image", `url(${movieList[9].backDrop})`);
  });
});
