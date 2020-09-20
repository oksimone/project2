$(() => {
  $(".heart").on("click", function(event) {
    event.stopPropagation();
    $(this).toggleClass("is-active");
    console.log(event);
  });
});
