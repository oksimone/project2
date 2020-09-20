$(document).ready(() => {
  $(() => {
    $(".heart").on("click", function(event) {
      event.stopPropagation();
      $(this).toggleClass("is-active");
    });
  });

  $.get("/api/watched").then(movieList => {
    for (let i = 0; i < movieList.length; i++) {
      const buttonID = movieList[i].id;
      if (!movieList[i].isFavorite) {
        $(".heartico-" + buttonID).on("click", event => {
          event.preventDefault();
          const movieData = { isFavorite: true };
          $.ajax({
            method: "PUT",
            url: "/api/moreinfo/" + buttonID,
            data: movieData
          });
        });
      } else {
        $(".heartico-" + buttonID).on("click", event => {
          event.preventDefault();
          const movieData = { isFavorite: false };
          $.ajax({
            method: "PUT",
            url: "/api/moreinfo/" + buttonID,
            data: movieData
          });
        });
      }
      if (!movieList[i].onPlaylist) {
        $(".plusico-" + buttonID).on("click", event => {
          event.preventDefault();
          const movieData = { onPlaylist: true };
          $.ajax({
            method: "PUT",
            url: "/api/moreinfo/" + buttonID,
            data: movieData
          });
        });
      } else {
        $(".plusico-" + buttonID).on("click", event => {
          event.preventDefault();
          const movieData = { onPlaylist: false };
          $.ajax({
            method: "PUT",
            url: "/api/moreinfo/" + buttonID,
            data: movieData
          });
        });
      }
      $(".trashico-" + buttonID).on("click", event => {
        event.preventDefault();
        $.ajax({
          method: "DELETE",
          url: "/api/moreinfo/" + buttonID
        });
        window.location.href = "/watched";
      });
    }
  });
});
