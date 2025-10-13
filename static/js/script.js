const checkBoxOne = document.getElementById("checkboxOne");
const catImage = document.getElementById("catImage");

checkBoxOne.addEventListener("change", function () {
  if (this.checked) {
    catImage.style.display = "inline";
  } else {
    catImage.style.display = "none";
  }
});
