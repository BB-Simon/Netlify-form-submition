window.onload = function () {
  const downloadBtn = document.getElementById("download-btn");
  downloadBtn.addEventListener("click", downloadTheForm);
};

function downloadTheForm(e) {
  window.scrollTo(0, 0);
  html2canvas(document.getElementById("original-form")).then((canvas) => {
    if (window.navigator.msSaveBlob) {
      window.navigator.msSaveBlob(
        canvas.msToBlob(),
        new Date().getTime() + ".png"
      );
    } else {
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.href = canvas.toDataURL();
      a.download = new Date().getTime() + ".png";
      a.click();
      document.body.removeChild(a);
    }
  });
}
