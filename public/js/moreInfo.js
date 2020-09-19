$(document).ready(() => {
  const windowPath = window.location.pathname.split("/");
  const id = windowPath[windowPath.length - 1];
  $.get("/api/moreInfo/" + id).then(movie => {
    console.log(movie);
    $(".infoBackdrop").css("background-image", `url(${movie[0].backDrop})`);
    $("#mi-pos").attr("src", movie[0].poster);
    $("#mi-des").text(movie[0].description);
    $("#mi-title").text(movie[0].title + " " + movie[0].releaseDate);
  });
});
