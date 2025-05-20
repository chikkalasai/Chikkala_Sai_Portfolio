window.addEventListener("load", () => {
  const title = document.querySelector(".typing");
  const subtitle = document.querySelector(".sub-text");
  const intro = document.getElementById("intro-animation");
  const main = document.getElementById("main-content");

  gsap.fromTo(title, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1.5 });
  gsap.fromTo(subtitle, { opacity: 0, y: 40 }, { opacity: 1, y: 0, delay: 1, duration: 1.5 });

  gsap.to("#intro-animation", {
    delay: 3.5,
    duration: 1,
    opacity: 0,
    onComplete: () => {
      intro.style.display = "none";
      main.classList.remove("hidden");
      animateSections();
    }
  });
});

function animateSections() {
  gsap.utils.toArray(".reveal").forEach(section => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
      },
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });
  });
}
