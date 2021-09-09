gsap.registerPlugin(ScrollTrigger);

gsap.to(".green", {
  scrollTrigger: {
    trigger: "#rooms",
    start: "top 100px",
    toggleActions: "play complete play reverse"
  },
  opacity: 1,
  ease: "power1.out",
  duration: 0.2
});

gsap.to(".logo", {
  scrollTrigger: {
    trigger: "#rooms",
    start: "top 100px",
    toggleActions: "play complete play reverse"
  },
  attr: {src:"/Users/philipng/Desktop/Infinity/Global/images/negativeLogo.gif"},
  opacity:1,
  ease: "power1.out",
  duration: 0.2
});

gsap.to(".nav-item, .nav-link, .bar", {
  scrollTrigger: {
    trigger: "#rooms",
    start: "top 100px",
    toggleActions: "play complete play reverse"
  },
  color: "white",
  ease: "power1.out",
  duration: 0.2
});

const cards = document.querySelectorAll('.roomcard');
cards.forEach((card) => {
  gsap.from(card, {
    opacity: 0,
    y:-100,
    duration: 0.7,
    ease:"power1.out",
    scrollTrigger: {
      trigger: card,
      start: "top bottom-=100"
    }
  });
});

const pics = document.querySelectorAll('.cardimage');
pics.forEach((pic) => {
  gsap.from(pic, {
    opacity: 0,
    width:0,
    duration: 0.7,
    ease:"power1.out",
    scrollTrigger: {
      trigger: pic,
      start: "top bottom-=100"
    }
  });
});
