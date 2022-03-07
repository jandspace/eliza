// = = = = = = = = = = = = = = = = = = = = = = = = = =
// LoadMore
//

$(document).ready(function () {
  $(".article-group > .article").slice(0, 4).show();
  $("#loadMore").on("click", function (e) {
    e.preventDefault();
    $(".article-group > .article:hidden").slice(0, 4).slideDown();
    if ($(".article-group > .article:hidden").length == 0) {
      $(".load-more").text("No more article").addClass("no-article");
    }
  });
});
