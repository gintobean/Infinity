gsap.registerPlugin(ScrollTrigger)

var width, scrolltop;
$(window).on('load resize', function() {
    width = this.innerWidth;
    console.log(width);
});



gsap.to(".green", {
  scrollTrigger: {
    trigger: "#gallery",
    start: "top 100px",
    toggleActions: "play complete play reverse"
  },
  opacity: 1,
  ease: "power1.out",
  duration: 0.2
});

gsap.to(".logo", {
  scrollTrigger: {
    trigger: "#gallery",
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
      trigger: "#gallery",
      start: "top 100px",
      toggleActions: "play complete play reverse"
    },
    backgroundColor: "#176F5C",
    ease: "power1.out",
    duration: 0.3
  });

gsap.to(".nav-item, .nav-link, .bar", {
  scrollTrigger: {
    trigger: "#gallery",
    start: "top 100px",
    toggleActions: "play complete play reverse"
  },
  color: "white",
  ease: "power1.out",
  duration: 0.2
});

gsap.from(".pic1", {
  scrollTrigger: {
    trigger: ".pic1",
    start: "top 450px",
  },
  x: -100,
  height: 0
});

gsap.to(".pic1", {
  scrollTrigger: {
    trigger: ".pic1",
    start: "top 450px",
  },
  width: "100%",
  borderRadius: "0%",
  duration: 1.5,
});

gsap.from(".pic2", {
  scrollTrigger: {
    trigger: ".pic2",
    start: "top 450",
  },
  x: 100,
  height: 0
});

gsap.to(".pic2", {
  scrollTrigger: {
    trigger: ".pic2",
    start: "top 450px",
  },
  width: "100%",
  borderRadius: "0%",
  duration: 1.5,
});

gsap.from(".pic3", {
  scrollTrigger: {
    trigger: ".pic3",
    start: "top 350px",
  },
  x: -100,
  height: 0,
});

gsap.to(".pic3", {
  scrollTrigger: {
    trigger: ".pic3",
    start: "top 350px",
  },
  width: "100%",
  borderRadius: "0%",
  duration: 1.5,
});

gsap.from(".pic5", {
  scrollTrigger: {
    trigger: ".pic5",
    start: "top 350px",
  },
  x: 100,
  height: 0,
});

gsap.to(".pic5", {
  scrollTrigger: {
    trigger: ".pic5",
    start: "top 350px",
  },
  width: "100%",
  borderRadius: "0%",
  duration: 1.5,
});

gsap.from(".pic", {
  scrollTrigger: {
    trigger: ".pic",
    start: "top bottom",
  },
  duration: 0.6,
  opacity: 0
});

gsap.from(".textbox1", {
  scrollTrigger: {
    trigger: ".textbox1",
    start: "top bottom",
  },
  duration: 1.1,
  opacity: 0.5,
  y: 100
});

gsap.from(".textbox2", {
  scrollTrigger: {
    trigger: ".textbox2",
    start: "top bottom",
  },
  duration: 1.1,
  opacity: 0.5,
  y: 100
});


gsap.from(".textbox3", {
  scrollTrigger: {
    trigger: ".textbox3",
    start: "top bottom",
  },
  duration: 1.1,
  opacity: 0.5,
  y: 100
});

gsap.from(".textbox4", {
  scrollTrigger: {
    trigger: ".textbox4",
    start: "top bottom",
  },
  duration: 1.1,
  opacity: 0.5,
  y: 100
});
