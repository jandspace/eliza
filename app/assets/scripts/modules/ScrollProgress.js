// = = = = = = = = = = = = = = = = = = = = = = = = = =
// ScrollProgress
//

$("<div id='Progress' class='progress-bar'></div>").appendTo("body.scrollprogress header");

$(document).on("scroll", function () {
  var pixels = $(document).scrollTop();
  var pageHeight = $(document).height() - $(window).height();
  var progress = (100 * pixels) / pageHeight;

  $("#Progress").css("width", progress + "%");
});
