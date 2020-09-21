$(document).ready(() => {
  $.get("/api/favorites").then(movieList => {
    for (let i = 0; i < movieList.length; i++) {
      const buttonID = movieList[i].id;
      $(".heartico-" + buttonID).on("click", event => {
        event.preventDefault();
        event.stopPropagation();
        $(".heartico-" + buttonID).toggleClass("is-active");
        const movieData = { isFavorite: false };
        $.ajax({
          method: "PUT",
          url: "/api/moreinfo/" + buttonID,
          data: movieData
        });
        window.location.reload();
      });
      if (!movieList[i].onPlaylist) {
        $(".plusico-" + buttonID).on("click", event => {
          event.preventDefault();
          const movieData = { onPlaylist: true };
          $.ajax({
            method: "PUT",
            url: "/api/moreinfo/" + buttonID,
            data: movieData
          });
          window.location.reload();
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
          window.location.reload();
        });
      }
    }
  });

  $(".title").each(function() {
    const newstr = $(this)
      .text()
      .substring(0, 45);
    $(this).text(newstr);
  });

  $(".description").each(function() {
    const newstr = $(this)
      .text()
      .substring(0, 123);
    $(this).text(newstr);
  });
});
