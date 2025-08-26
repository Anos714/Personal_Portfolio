let hamBars = document.querySelector(".fa-bars");
let hamburgerMenu = document.querySelector(".ham-div");

function toggleMenu() {
  hamburgerMenu.classList.toggle("active");
}

hamBars.addEventListener("click", toggleMenu);

const options = {
  threshold: 0.1,
};

function callback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}

const observer = new IntersectionObserver(callback, options);

const elementsToAnimate = document.querySelectorAll(".animate");
elementsToAnimate.forEach((element) => {
  observer.observe(element);
});
