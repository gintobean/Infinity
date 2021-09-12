gsap.registerPlugin(ScrollTrigger)

gsap.to(".green", {
  scrollTrigger: {
    trigger: "#amenities",
    start: "top 100px",
    toggleActions: "play complete play reverse"
  },
  opacity: 1,
  ease: "power1.out",
  duration: 0.2
});

gsap.to(".logo", {
  scrollTrigger: {
    trigger: "#amenities",
    start: "top 100px",
    toggleActions: "play complete play reverse"
  },
  attr: {
    src: "/Users/philipng/Desktop/Infinity/Global/images/negativeLogo.gif"
  },
  opacity: 1,
  ease: "power1.out",
  duration: 0.2
});

gsap.to(".navbar", {
  scrollTrigger: {
    trigger: "#amenities",
    start: "top 100px",
    toggleActions: "play complete play reverse"
  },
  backgroundColor: "#176F5C",
  ease: "power1.out",
  duration: 0.3
});

gsap.to(".nav-item, .nav-link, .bar", {
  scrollTrigger: {
    trigger: "#amenities",
    start: "top 100px",
    toggleActions: "play complete play reverse"
  },
  color: "white",
  ease: "power1.out",
  duration: 0.2
});

gsap.from(".top-pic", {filter: "blur(5px)",scale:1.1, opacity: 1, duration: 1.5, ease: "power4.out"});

var amenities = document.querySelectorAll(".pic-left");
var amenities2 = document.querySelectorAll(".pic-right");
var text = document.querySelectorAll(".textbox");

amenities.forEach((item) => {
  gsap.fromTo(item, {
    scrollTrigger: {
      trigger: item,
      start: "top bottom"
    },
    ease: "power1.out",
    x: -100,
  }, {
    scrollTrigger: {
      trigger: item,
      start: "top bottom"
    },
    ease: "power1.out",
    width: "100%",
    borderRadius: "0%",
    duration: 1.5,
  });
});

amenities2.forEach((item) => {
  gsap.fromTo(item, {
    scrollTrigger: {
      trigger: item,
      start: "top bottom"
    },
    ease: "power1.out",
    x: 100,
  }, {
    scrollTrigger: {
      trigger: item,
      start: "top bottom"
    },
    duration: 1.5,
    ease: "power1.out",
    width: "100%",
    borderRadius: "0%",
  });
});

text.forEach((item) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top bottom"
    },
    ease: "power1.out",
    y: 100,
    opacity: 0.5,
    duration: 1
  });
});

gsap.from("#collage", {
  scrollTrigger: {
    trigger: "#collage",
    start: "top bottom"
  },
  opacity: 0.3,
  duration: 1
});
