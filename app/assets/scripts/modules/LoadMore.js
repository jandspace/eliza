// = = = = = = = = = = = = = = = = = = = = = = = = = =
// LoadMore
//
$(function () {
  $(".article-group > .article").slice(0, 4).show();
  $("body").on("click touchstart", ".load-more", function (e) {
    e.preventDefault();
    $(".article-group > .article:hidden").slice(0, 4).slideDown();
    if ($(".article-group > .article:hidden").length == 0) {
      $("#LoadMore").css("visibility", "hidden");
    }
  });
});
