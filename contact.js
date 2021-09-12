$(".nav-item, .nav-link, .bar").css("color","white");

$(".nav-item .nav-link, .nav-item").hover(function() {
  $(this).css("border-bottom", "1px solid black");
  $(this).css("color", "black");
}, function() {
    $(this).css("border-bottom", "none");
    $(this).css("color", "white");
  }
);
