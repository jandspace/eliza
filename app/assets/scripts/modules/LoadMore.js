// = = = = = = = = = = = = = = = = = = = = = = = = = =
// LoadMore
//

$(document).ready(function () {
  $("#Article-Container .article-group > .article").slice(0, 15).show();
  $("#loadMore").on("click", function (e) {
    e.preventDefault();
    $("#Article-Container .article-group > .article:hidden").slice(0, 15).slideDown();
    if ($("#Article-Container .article-group > .article:hidden").length == 0) {
      $("#Article-Container .load-more").text("No more article").addClass("no-article");
    }
  });
});

//Related Article
$(document).ready(function () {
  $("#Realted-Article .article-group > .article").slice(0, 4).show();
  $("#Realted-Article #loadMore").on("click", function (e) {
    e.preventDefault();
    $("#Realted-Article .article-group > .article:hidden").slice(0, 4).slideDown();
    if ($("#Realted-Article .article-group > .article:hidden").length == 0) {
      $("#Realted-Article .load-more").text("No more article").addClass("no-article");
    }
  });
});
