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

    //clickhandler for playlist button
    if (!movie[0].onPlaylist) {
      $("#pl-1").text("Add to Playlist! 🍿");
      $("#pl-1").on("click", event => {
        event.preventDefault();
        const movieData = { onPlaylist: true };
        $.ajax({
          method: "PUT",
          url: "/api/moreinfo/" + id,
          data: movieData
        });
        $("#pl-1").text("Added to Playlist! 🍿");
        window.location.reload();
      });
    } else {
      $("#pl-1").text("Added to Playlist! 🍿");
      $("#pl-1").on("click", event => {
        event.preventDefault();
        const movieData = { onPlaylist: false };
        $.ajax({
          method: "PUT",
          url: "/api/moreinfo/" + id,
          data: movieData
        });
        $("#pl-1").text("Add to Playlist! 🍿");
        window.location.reload();
      });
    }

    //clickhandler for favorite button
    if (!movie[0].isFavorite) {
      $("#fl-1").text("Add to Favorites! ❤");
      $("#fl-1").on("click", event => {
        event.preventDefault();
        const movieData = { isFavorite: true };
        $.ajax({
          method: "PUT",
          url: "/api/moreinfo/" + id,
          data: movieData
        });
        $("#fl-1").text("Added to Favorites! ❤");
        window.location.reload();
      });
    } else {
      $("#fl-1").text("Added to Favorites! ❤");
      $("#fl-1").on("click", event => {
        event.preventDefault();
        const movieData = { isFavorite: false };
        $.ajax({
          method: "PUT",
          url: "/api/moreinfo/" + id,
          data: movieData
        });
        $("#fl-1").text("Add to Favorites! ❤");
        window.location.reload();
      });
    }

    //clickhandler for seen it button
    if (!movie[0].hasWatched) {
      $("#sl-1").text("Seen it? 👁 👁");
      $("#sl-1").on("click", event => {
        event.preventDefault();
        const movieData = { hasWatched: true };
        $.ajax({
          method: "PUT",
          url: "/api/moreinfo/" + id,
          data: movieData
        });
        $("#sl-1").text("You've seen it! 👁 👁");
        window.location.reload();
      });
    } else {
      $("#sl-1").text("You've seen it! 👁 👁");
      $("#sl-1").on("click", event => {
        event.preventDefault();
        const movieData = { hasWatched: false };
        $.ajax({
          method: "PUT",
          url: "/api/moreinfo/" + id,
          data: movieData
        });
        $("#sl-1").text("Seen it? 👁 👁");
        window.location.reload();
      });
    }
  });
});
