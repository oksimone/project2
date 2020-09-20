$(document).ready(() => {
  $.get("/api/searchresults").then(movieList => {
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

    //sets watchlist buttons up with data-id
    $("#wl-1").data("movie-id", movieList[0].id);
    $("#wl-2").data("movie-id", movieList[1].id);
    $("#wl-3").data("movie-id", movieList[2].id);
    $("#wl-4").data("movie-id", movieList[3].id);
    $("#wl-5").data("movie-id", movieList[4].id);
    $("#wl-6").data("movie-id", movieList[5].id);
    $("#wl-7").data("movie-id", movieList[6].id);
    $("#wl-8").data("movie-id", movieList[7].id);
    $("#wl-9").data("movie-id", movieList[8].id);
    $("#wl-10").data("movie-id", movieList[9].id);

    //sets more info buttons up with data-id
    $("#info-1").data("movie-id", movieList[0].id);
    $("#info-2").data("movie-id", movieList[1].id);
    $("#info-3").data("movie-id", movieList[2].id);
    $("#info-4").data("movie-id", movieList[3].id);
    $("#info-5").data("movie-id", movieList[4].id);
    $("#info-6").data("movie-id", movieList[5].id);
    $("#info-7").data("movie-id", movieList[6].id);
    $("#info-8").data("movie-id", movieList[7].id);
    $("#info-9").data("movie-id", movieList[8].id);
    $("#info-10").data("movie-id", movieList[9].id);
  });

  //click handlers for more info buttons
  $("#info-1").on("click", event => {
    event.preventDefault();
    window.location.replace("/moreInfo/" + $("#info-1").data("movie-id"));
  });

  $("#info-2").on("click", event => {
    event.preventDefault();
    window.location.replace("/moreInfo/" + $("#info-2").data("movie-id"));
  });

  $("#info-3").on("click", event => {
    event.preventDefault();
    window.location.replace("/moreInfo/" + $("#info-3").data("movie-id"));
  });

  $("#info-4").on("click", event => {
    event.preventDefault();
    window.location.replace("/moreInfo/" + $("#info-4").data("movie-id"));
  });

  $("#info-5").on("click", event => {
    event.preventDefault();
    window.location.replace("/moreInfo/" + $("#info-5").data("movie-id"));
  });

  $("#info-6").on("click", event => {
    event.preventDefault();
    window.location.replace("/moreInfo/" + $("#info-6").data("movie-id"));
  });

  $("#info-7").on("click", event => {
    event.preventDefault();
    window.location.replace("/moreInfo/" + $("#info-7").data("movie-id"));
  });

  $("#info-8").on("click", event => {
    event.preventDefault();
    window.location.replace("/moreInfo/" + $("#info-8").data("movie-id"));
  });

  $("#info-9").on("click", event => {
    event.preventDefault();
    window.location.replace("/moreInfo/" + $("#info-9").data("movie-id"));
  });

  //clickhandlers for watchlist buttons
  $("#wl-1").on("click", event => {
    event.preventDefault();
    const movieData = { onPlaylist: true };
    $.ajax({
      method: "PUT",
      url: "/api/moreinfo/" + $("#wl-1").data("movie-id"),
      data: movieData
    });
    $("#wl-1").text("Added!");
  });

  $("#wl-2").on("click", event => {
    event.preventDefault();
    const movieData = { onPlaylist: true };
    $.ajax({
      method: "PUT",
      url: "/api/moreinfo/" + $("#wl-2").data("movie-id"),
      data: movieData
    });
    $("#wl-2").text("Added!");
  });

  $("#wl-3").on("click", event => {
    event.preventDefault();
    const movieData = { onPlaylist: true };
    $.ajax({
      method: "PUT",
      url: "/api/moreinfo/" + $("#wl-3").data("movie-id"),
      data: movieData
    });
    $("#wl-3").text("Added!");
  });

  $("#wl-4").on("click", event => {
    event.preventDefault();
    const movieData = { onPlaylist: true };
    $.ajax({
      method: "PUT",
      url: "/api/moreinfo/" + $("#wl-4").data("movie-id"),
      data: movieData
    });
    $("#wl-4").text("Added!");
  });

  $("#wl-5").on("click", event => {
    event.preventDefault();
    const movieData = { onPlaylist: true };
    $.ajax({
      method: "PUT",
      url: "/api/moreinfo/" + $("#wl-5").data("movie-id"),
      data: movieData
    });
    $("#wl-5").text("Added!");
  });

  $("#wl-6").on("click", event => {
    event.preventDefault();
    const movieData = { onPlaylist: true };
    $.ajax({
      method: "PUT",
      url: "/api/moreinfo/" + $("#wl-6").data("movie-id"),
      data: movieData
    });
    $("#wl-6").text("Added!");
  });

  $("#wl-7").on("click", event => {
    event.preventDefault();
    const movieData = { onPlaylist: true };
    $.ajax({
      method: "PUT",
      url: "/api/moreinfo/" + $("#wl-7").data("movie-id"),
      data: movieData
    });
    $("#wl-7").text("Added!");
  });

  $("#wl-8").on("click", event => {
    event.preventDefault();
    const movieData = { onPlaylist: true };
    $.ajax({
      method: "PUT",
      url: "/api/moreinfo/" + $("#wl-8").data("movie-id"),
      data: movieData
    });
    $("#wl-8").text("Added!");
  });

  $("#wl-9").on("click", event => {
    event.preventDefault();
    const movieData = { onPlaylist: true };
    $.ajax({
      method: "PUT",
      url: "/api/moreinfo/" + $("#wl-9").data("movie-id"),
      data: movieData
    });
    $("#wl-9").text("Added!");
  });

  $("#wl-10").on("click", event => {
    event.preventDefault();
    const movieData = { onPlaylist: true };
    $.ajax({
      method: "PUT",
      url: "/api/moreinfo/" + $("#wl-10").data("movie-id"),
      data: movieData
    });
    $("#wl-10").text("Added!");
  });
});
