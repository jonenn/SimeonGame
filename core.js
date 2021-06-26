const interfaceStatus = document.querySelector(".interface-checkbox");
const interfaceType = document.querySelector("h6");
const simonContainer = document.querySelector("#container");
const simonGreen = document.querySelector("#green");
const simonRed = document.querySelector("#red");
const simonYellow = document.querySelector("#yellow");
const simonBlue = document.querySelector("#blue");
const simonCenter = document.querySelector("#center");

interfaceStatus.addEventListener("click", modernClassic);

function modernClassic() {
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

const clickableBtn = document.querySelector(".btn-container");
const modal = document.querySelectorAll(".modal");
const tryAgainModal = document.querySelector(".try-again");
const winModal = document.querySelector(".win");
const playAgain = document.querySelector(".play-again");
const levelsPassed = document.querySelector("#levels-passed");
const finaleLevelDisplay = document.querySelector("#finale-level");
const LEVELS = 10;
class Game {
   constructor() {
      this.init();
      this.generateSequence();
      setTimeout(this.levelUp(), 1200)
   }

   init() {
      modal[0].classList.add("hide");
      this.level = 1;
      this.colours = {
         simonGreen,
         simonRed,
         simonYellow,
         simonBlue
      };
      this.chooseColour = this.chooseColour.bind(this);
      this.levelUp = this.levelUp.bind(this);
   }

   generateSequence() {
      this.sequence = new Array(LEVELS).fill(0).map(n => Math.floor(Math.random() * 4));
   }

   levelUp() {
      this.lighting();
      this.sublevel = 0;
      this.addClickEve();
   }

   numberToColour(n) {
      switch (n) {
         case 0:
            return "simonGreen";
         case 1:
            return "simonRed";
         case 2:
            return "simonYellow";
         case 3:
            return "simonBlue";
      }
   }

   colourToNumber(colour) {
      switch (colour) {
         case "simonGreen":
            return 0;
         case "simonRed":
            return 1;
         case "simonYellow":
            return 2;
         case "simonBlue":
            return 3;
      }
   }

   lighting() {
      for(let i = 0; i < this.level; i++) {
         let colour = this.numberToColour(this.sequence[i]);
         setTimeout(() => this.turnOnColour(colour), 1000 * i);
      }
   }

   turnOnColour(colour) {
      this.colours[colour].classList.add("light");
      setTimeout(()=>this.turnOffColour(colour), 350);
   }

   turnOffColour(colour) {
      this.colours[colour].classList.remove("light");
   }

   addClickEve() {
      this.colours.simonGreen.addEventListener("click", this.chooseColour);
      this.colours.simonRed.addEventListener("click", this.chooseColour);
      this.colours.simonYellow.addEventListener("click", this.chooseColour);
      this.colours.simonBlue.addEventListener("click", this.chooseColour);
      clickableBtn.style.cursor = "pointer";
   }

   deleteClickEve() {
      this.colours.simonGreen.removeEventListener("click", this.chooseColour);
      this.colours.simonRed.removeEventListener("click", this.chooseColour);
      this.colours.simonYellow.removeEventListener("click", this.chooseColour);
      this.colours.simonBlue.removeEventListener("click", this.chooseColour);
      clickableBtn.style.cursor = "initial";
   }

   chooseColour(eve) {
      let nameOfColour = eve.target.dataset.colour;
      let numberOfColour = this.colourToNumber(nameOfColour);
      this.turnOnColour(nameOfColour);
      if (numberOfColour === this.sequence[this.sublevel]) {
         this.sublevel++;
         if (this.sublevel === this.level) {
            this.level++;
            this.deleteClickEve();
            (this.level === (LEVELS + 1))
            ? (modal[1].classList.remove("hide"),
               winModal.classList.remove("hide"),
               tryAgainModal.classList.add("hide"),
               finaleLevelDisplay.textContent = LEVELS)
            : setTimeout(this.levelUp, 2000);
         }
      } else {
         modal[1].classList.remove("hide");
         levelsPassed.textContent = (this.level - 1);
         playAgain.addEventListener("click", () => {
            modal[1].classList.add("hide");
            this.restart();
         });
      }
   }

   restart() {
      this.generateSequence();
      setTimeout(this.levelUp, 1200);
      this.level = 1;
   }
}

const startGame = () => {
   let game = new Game();
}