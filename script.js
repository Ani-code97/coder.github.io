let typed = new Typed(".typed-text", {
  strings: ["awesome,", "life,", "WORLD..."],
  typeSpeed: 80,
  backSpeed: 60,
  loop: true,
});
let bar = document.querySelector(".show");
let cross = document.querySelector(".hide");
let mobNav = document.querySelector("#mobile-nav");
show = () => {
  mobNav.style.height = "auto";
  bar.setAttribute("style", "opacity: 0; pointer-events: none;");
  cross.setAttribute("style", "opacity: 1; pointer-events: all;");
};
hide = () => {
  mobNav.style.height = "0";
  bar.setAttribute("style", "opacity: 1; pointer-events: all;");
  cross.setAttribute("style", "opacity: 0; pointer-events: none;");
};
