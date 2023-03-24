const questionList = document.querySelectorAll(".questionList--item");

questionList.forEach((item, index) => {
  item.addEventListener("click", () => {
    let panel = item.children[1];

    item.classList.toggle("open");

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

    for (let i of questionList) {
      if (i !== item) {
        i.classList.remove("open");
        i.children[1].style.maxHeight = null;
      }
    }
  });
});

const sr = ScrollReveal({
  origin: "top",
  duration: 1500,
  reset: true,
});

ScrollReveal().reveal(".headMain--text h1", {
  opacity: 0.2,
  origin: "left",
  distance: "25%",
});

ScrollReveal().reveal(".headMain--text p", {
  opacity: 0,
  origin: "bottom",
  distance: "50%",
  delay: 750,
});

ScrollReveal().reveal(".headMain--form", {
  opacity: 0.25,
  scale: 0.75,
  origin: "bottom",
  distance: "15%",
  duration: 1000,
});

ScrollReveal().reveal(".aboutSec img", {
  opacity: 0.25,
  origin: "left",
  distance: "50%",
  viewOffset: {
    bottom: 150,
  },
});

ScrollReveal().reveal(".aboutSec--text h2", {
  opacity: 0.25,
  origin: "bottom",
  distance: "50%",
  viewOffset: {
    bottom: 150,
  },
});

ScrollReveal().reveal(".aboutSec--text p", {
  opacity: 0,
  origin: "bottom",
  distance: "25%",
  delay: 750,
});

ScrollReveal().reveal(".serviceSec > h2", {
  opacity: 0.25,
  origin: "top",
  distance: "100%",
});

ScrollReveal().reveal(".questionSec > h2", {
  opacity: 0.25,
  origin: "top",
  distance: "100%",
});

const serviceList = document.querySelectorAll(".serviceGrid--item");

serviceList.forEach((item, index) => {
  ScrollReveal().reveal(item, {
    opacity: 0.15,
    scale: 0.65,
    duration: 1000,
    delay: index * 250,
  });
});

questionList.forEach((item, index) => {
  ScrollReveal().reveal(item, {
    opacity: 0.15,
    scale: 0.75,
    duration: 1000,
    delay: index * 150,
  });
});

ScrollReveal().reveal(".serviceSec > .action", {
  opacity: 0.25,
  origin: "bottom",
  distance: "100%",
  duration: 1000,
});

ScrollReveal().reveal(".lastSec .wrap--text", {
  opacity: 0.25,
  origin: "left",
  distance: "50%",
  duration: 1500,
});

ScrollReveal().reveal(".lastSec .wrap--block", {
  opacity: 0.25,
  origin: "right",
  distance: "50%",
  duration: 1500,
});
