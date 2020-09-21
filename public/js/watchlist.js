$(document).ready(() => {
  $(() => {
    $(".heart").on("click", event => {
      event.stopPropagation();
      $(this).toggleClass("is-active");
    });
  });

  $.get("/api/watchlist").then(movieList => {
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
      if (!movieList[i].hasWatched) {
        $(".eyeico-" + buttonID).on("click", event => {
          event.preventDefault();
          const movieData = { hasWatched: true };
          $.ajax({
            method: "PUT",
            url: "/api/moreinfo/" + buttonID,
            data: movieData
          });
          window.location.href = "/watchlist";
        });
      } else {
        $(".eyeico-" + buttonID).on("click", event => {
          event.preventDefault();
          const movieData = { hasWatched: false };
          $.ajax({
            method: "PUT",
            url: "/api/moreinfo/" + buttonID,
            data: movieData
          });
          window.location.href = "/watchlist";
        });
      }
      $(".minusico-" + buttonID).on("click", event => {
        event.preventDefault();
        const movieData = { onPlaylist: false };
        $.ajax({
          method: "PUT",
          url: "/api/moreinfo/" + buttonID,
          data: movieData
        });
        window.location.href = "/watchlist";
      });
      $("#" + buttonID).on("click", event => {
        event.preventDefault();
        window.location.href = "/moreInfo/" + buttonID;
      });
    }
  });

  $(".title").each(() => {
    const newstr = $(this)
      .text()
      .substring(0, 45);
    $(this).text(newstr);
  });

  $(".description").each(() => {
    const newstr = $(this)
      .text()
      .substring(0, 123);
    $(this).text(newstr);
  });
});
