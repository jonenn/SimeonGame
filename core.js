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
      simonContainer.classList.remove("btn-container-m"); simonContainer.classList.add("btn-container-c");
      simonGreen.classList.remove("grn-btn-m"); simonGreen.classList.add("grn-btn-c");
      simonGreen.classList.add("btn-c");
      simonRed.classList.remove("red-btn-m"); simonRed.classList.add("red-btn-c");
      simonRed.classList.add("btn-c");
      simonYellow.classList.remove("yel-btn-m"); simonYellow.classList.add("yel-btn-c");
      simonYellow.classList.add("btn-c");
      simonBlue.classList.remove("blu-btn-m"); simonBlue.classList.add("blu-btn-c");
      simonBlue.classList.add("btn-c");
      interfaceType.innerText = "Classic";
   } else {
      simonContainer.classList.remove("btn-container-c"); simonContainer.classList.add("btn-container-m");
      simonGreen.classList.remove("grn-btn-c"); simonGreen.classList.add("grn-btn-m");
      simonGreen.classList.remove("btn-c");
      simonRed.classList.remove("red-btn-c"); simonRed.classList.add("red-btn-m");
      simonRed.classList.remove("btn-c");
      simonYellow.classList.remove("yel-btn-c"); simonYellow.classList.add("yel-btn-m");
      simonYellow.classList.remove("btn-c");
      simonBlue.classList.remove("blu-btn-c"); simonBlue.classList.add("blu-btn-m");
      simonBlue.classList.remove("btn-c");
      interfaceType.innerText = "Modern";
   }
}

const start = document.querySelector("#starter")
class Game {
   constructor() {
      this.init()
      this.generateSequence();
   }

   init() {
      start.classList.add("hide");
      this.level = 1;
      this.colours = {
         simonGreen,
         simonRed,
         simonYellow,
         simonBlue
      };
   }

   generateSequence() {
      this.sequence = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4));
   }
}

const startGame = () => {
   window.game = new Game();
}