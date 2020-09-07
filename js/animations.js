gsap.registerPlugin(ScrollTrigger);

// You can use a ScrollTrigger in a tween or timeline
gsap.to(".main__second-rubber", {
  scaleX: 1.2,
  scrollTrigger: {
    trigger: ".main__second-rubber",
    start: "top center",
//    end: "+=500",
    pin: false,
   scrub: true,
//     markers: true
  }
});