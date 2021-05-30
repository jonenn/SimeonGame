const interfaceStatus = document.querySelector(".interface-checkbox");
const interfaceType = document.querySelector("h6");
const simonContainer = document.querySelector("#container");
const simonGreen = document.querySelector("#green");
const simonRed = document.querySelector("#red");
const simonYellow = document.querySelector("#yellow");
const simonBlue = document.querySelector("#blue");
const simonCenter = document.querySelector("#center");


interfaceStatus.addEventListener("click", listener);

function listener() {
   if (interfaceStatus.checked) {
      simonContainer.classList.remove("btn-container-m");   simonContainer.classList.add("btn-container-c");
      simonGreen.classList.remove("grn-btn-m");             simonGreen.classList.add("grn-btn-c");
      simonGreen.classList.add("btn-c");
      simonRed.classList.remove("red-btn-m");               simonRed.classList.add("red-btn-c");
      simonRed.classList.add("btn-c");
      simonYellow.classList.remove("yel-btn-m");            simonYellow.classList.add("yel-btn-c");
      simonYellow.classList.add("btn-c");
      simonBlue.classList.remove("blu-btn-m");              simonBlue.classList.add("blu-btn-c");
      simonBlue.classList.add("btn-c");
      interfaceType.innerText = "Classic";
   } else {
      console.log("Modern");
   }
}

