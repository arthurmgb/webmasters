let thumb = document.querySelector(".thumb");
let video = document.querySelector("video");

thumb.addEventListener("click", () => {
  thumb.style.display = "none";
  video.style.visibility = "visible";
  video.play();
});
