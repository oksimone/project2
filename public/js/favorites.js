$(document).ready(() => {
  $(() => {
    $(".heart").on("click", function(event) {
      event.stopPropagation();
      $(this).toggleClass("is-active");
    });
  });

  $.get("/api/favorites").then(movieList => {
    for (let i = 0; i < movieList.length; i++) {
      const buttonID = movieList[i].id;
      $(".heartico-" + buttonID).on("click", event => {
        event.preventDefault();
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

  // $(() => {
  //   $(".j-heart").on("click", function(event) {
  //     event.stopPropagation();

  //     const movieId = $(this)
  //       .parent()
  //       .attr("data-id");
  //     $(this).toggleClass("is-active");
  //     console.log("clicked " + movieId);
  //   });
  // });
});
