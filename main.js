gsap.registerPlugin(ScrollTrigger);

$(".bar").click(function() {
  $(".overlay").css("visibility", "visible");
});


$(".close").click(function() {
  $(".overlay").css("visibility", "hidden");
});

// Navbar animation

gsap.from(".main-title", {
  filter: "blur(5px)",
  scale: 1.3,
  ease: "power1.out",
  duration: 1
});

gsap.to(".green", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 100px",
    toggleActions: "play complete play reverse"
  },
  opacity: 1,
  ease: "power1.out",
  duration: 0.5
});

gsap.to(".navbar-nav .nav-item, .navbar-nav .nav-link", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 100px",
    toggleActions: "play complete play reverse"
  },
  color: "white",
  ease: "power1.out",
  duration: 0.5
});

gsap.to(".logo", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 100px",
    toggleActions: "play complete play reverse"
  },
  attr: {src:"images/negativeLogo.gif"},
  opacity:1,
  ease: "power1.out",
  duration: 0.2
});

var width = parseInt($(".navbar-image").css("width"));
console.log(width);

gsap.to(".navbar-image", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 100px",
    toggleActions: "play complete play reverse"
  },
  ease: "power1.out",
  width: () => 8 * width,
  duration: 0.7
});

gsap.to(".main-title", {
  scrollTrigger: {
    start: "150px",
    toggleActions: "play complete play reverse"
  },
  opacity:0,
  ease: "power1.out",
  duration: 0.2
});

gsap.to(".navbar", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 100px",
    toggleActions: "play complete play reverse"
  },
  backgroundColor: "#176F5C",
  ease: "power1.out",
  duration: 0.3
});

var lastScrollTop = 0;
$(window).on("click",function(event){
   var cur = $(this).scrollTop();
   console.log(cur);
   if (cur > lastScrollTop){
     window.scroll({
       top: cur + 1000,
       behavior: 'smooth',
       duration: 0.1
     });
   } else {
     window.scroll({
       top: cur - 1000,
       behavior: 'smooth',
       duration: 0.1
     });
   }
   lastScrollTop = window.scrollY;
   cur = lastScrollTop;
});

$(".cta-btn").hover(
  function() {
    gsap.to(".overlay3", {
      opacity: 0.3,
      duration: 0.5,
      ease: "linear"
    });
  },
  function() {
    gsap.to(".overlay3", {
      opacity: 0,
      duration: 0.5,
      ease: "linear"
    });
  }
);

$(".nav-item .nav-link, .nav-item").hover(function() {
  $(this).css("border-bottom", "1px solid black");
  $(this).css("color", "black");
}, function() {
    $(this).css("border-bottom", "none");
    $(this).css("color", "black");
  });
