window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".hero").classList.remove("hidden");
    document.querySelector(".about").classList.remove("hidden");

    document.querySelector(".hero").classList.add("show");
    document.querySelector(".about").classList.add("show");

    document.body.style.overflow = "auto";
  }, 2000);
});
