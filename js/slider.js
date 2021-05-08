var sliderElement = document.getElementById("my-keen-slider")
var interval = 0
function autoplay(run) {
  clearInterval(interval)
  interval = setInterval(() => {
    if (run && slider) {
      slider.next()
    }
  }, 2000)
}
var slider = new KeenSlider("#my-keen-slider", {
  loop: true,
  duration: 1000,
  dragStart: () => {
    autoplay(false);
  },
  dragEnd: () => {
    autoplay(true);
  },
  spacing: 10,
  slidesPerView: 1,
  centered: true,
  loop: true,
  mode: "snap",
  breakpoints: {
    "(min-width: 768px)": {
      slidesPerView: 3,
      mode: "free-snap",
    },
    "(min-width: 1200px)": {
      slidesPerView: 6,
      mode: "free-snap",
    },
  },
});

sliderElement.addEventListener("mouseover", () => {
  autoplay(false)
})
sliderElement.addEventListener("mouseout", () => {
  autoplay(true)
})
autoplay(true)