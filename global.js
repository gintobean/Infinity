gsap.registerPlugin(ScrollTrigger);

$(".bar").click(function() {
  $(".overlay").css("visibility", "visible");
});


$(".close").click(function() {
  $(".overlay").css("visibility", "hidden");
});

gsap.from(".navbar", {y:-200, duration: 1.1, ease: "power1.out"});

$(".nav-item .nav-link, .nav-item").hover(function() {
  $(this).css("border-bottom", "1px solid black");
  $(this).css("color", "black");
}, function() {
  if ($(window).scrollTop() > 800) {
    $(this).css("border-bottom", "none");
    $(this).css("color", "white");
  }
  else {
    $(this).css("border-bottom", "none");
  }
});
