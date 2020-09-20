$(document).ready(() => {
  const windowPath = window.location.pathname.split("/");
  const id = windowPath[windowPath.length - 1];
  $.get("/api/moreInfo/" + id).then(movie => {
    //changes background image at top
    $(".infoBackdrop").css("background-image", `url(${movie[0].backDrop})`);

    //adds poster to the page
    $("#mi-pos").attr("src", movie[0].poster);

    //adds description of movie to p tag
    $("#mi-des").text(movie[0].description);

    //adds title to h3 tag
    $("#mi-title").text(movie[0].title + " " + movie[0].releaseDate);
  });

  //clickhandler for playlist button
  $("#pl-1").on("click", event => {
    event.preventDefault();
    const movieData = { onPlaylist: true };
    $.ajax({
      method: "PUT",
      url: "/api/moreinfo/" + id,
      data: movieData
    });
    $("#pl-1").text("Added to Playlist! 🍿");
  });

  //clickhandler for favorite button
  $("#fl-1").on("click", event => {
    event.preventDefault();
    const movieData = { isFavorite: true };
    $.ajax({
      method: "PUT",
      url: "/api/moreinfo/" + id,
      data: movieData
    });
    $("#fl-1").text("Added to Favorites! ❤");
  });

  //clickhandler for favorite button
  $("#sl-1").on("click", event => {
    event.preventDefault();
    const movieData = { hasWatched: true };
    $.ajax({
      method: "PUT",
      url: "/api/moreinfo/" + id,
      data: movieData
    });
    $("#sl-1").text("You've seen it! 👁 👁");
  });
});
