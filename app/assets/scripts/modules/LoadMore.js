// = = = = = = = = = = = = = = = = = = = = = = = = = =
// LoadMore
//
$(function () {
  $(".article-group > .article").slice(0, 4).show();
  $("body").on("click touchstart", ".load-more", function (e) {
    e.preventDefault();
    $(".article:hidden").slice(0, 4).slideDown();
    if ($(".article:hidden").length == 0) {
      $(".load-more").css("visibility", "hidden");
    }
  });
});
