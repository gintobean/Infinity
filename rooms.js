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
  attr: {src:"images/negativeLogo.gif"},
  opacity:1,
  ease: "power1.out",
  duration: 0.2
});

gsap.to(".navbar", {
  scrollTrigger: {
    trigger: "#rooms",
    start: "top 100px",
    toggleActions: "play complete play reverse"
  },
  backgroundColor: "#176F5C",
  ease: "power1.out",
  duration: 0.3
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
