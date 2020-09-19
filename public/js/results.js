$(document).ready(() => {
  $.get("/api/searchresults").then(movieList => {
    console.log(movieList);
    //sets background images based on results
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
    //sets description based on results
    $("#des-1").text(movieList[0].description);
    $("#des-2").text(movieList[1].description);
    $("#des-3").text(movieList[2].description);
    $("#des-4").text(movieList[3].description);
    $("#des-5").text(movieList[4].description);
    $("#des-6").text(movieList[5].description);
    $("#des-7").text(movieList[6].description);
    $("#des-8").text(movieList[7].description);
    $("#des-9").text(movieList[8].description);
    $("#des-10").text(movieList[9].description);
    //sets title based on results
    $("#title-1").text(movieList[0].title);
    $("#title-2").text(movieList[1].title);
    $("#title-3").text(movieList[2].title);
    $("#title-4").text(movieList[3].title);
    $("#title-5").text(movieList[4].title);
    $("#title-6").text(movieList[5].title);
    $("#title-7").text(movieList[6].title);
    $("#title-8").text(movieList[7].title);
    $("#title-9").text(movieList[8].title);
    $("#title-10").text(movieList[9].title);
  });
});
