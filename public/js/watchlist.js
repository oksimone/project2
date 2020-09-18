$(() => {
  $(".j-heart").on("click", function(event) {
    event.stopPropagation();

    const movieId = $(this)
      .parent()
      .attr("data-id");
    $(this).toggleClass("is-active");
    console.log("clicked " + movieId);
  });
});