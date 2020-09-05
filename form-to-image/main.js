window.onload = function () {
  const submitBtn = document.getElementById("submit-btn");
  submitBtn.addEventListener("click", getScreenShotOfOriginalForm);
};

function getScreenShotOfOriginalForm(e) {
  e.preventDefault();
  e.target.innerHTML = "submited";
  setTimeout(() => {
    e.target.innerHTML = "submit";
  }, 2000);
  window.scrollTo(0, 0);
  html2canvas(document.getElementById("original-form")).then(function (canvas) {
    let img64 = canvas.toDataURL();
    let img = document.createElement("img");
    img.style.width = "100%";
    img.style.height = "100%";
    img.src = img64;
    let box = document.getElementById("screent-shot-of-original-form");
    box.appendChild(img);
  });
}
