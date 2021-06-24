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
const levelsPassed = document.querySelector("#levels-passed");
const playAgain = document.querySelector(".play-again");
const LEVELS = 50;
class Game {
   constructor() {
      this.init();
      this.generateSequence();
      this.levelUp();
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
      this.chooseColor = this.chooseColor.bind(this);
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

   numberToColor(n) {
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

   colorToNumber(color) {
      switch (color) {
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
         let color = this.numberToColor(this.sequence[i]);
         setTimeout(() => this.turnOnColor(color), 1000 * i);
      }
   }

   turnOnColor(color) {
      this.colours[color].classList.add("light");
      setTimeout(()=>this.turnOffColor(color), 350);
   }

   turnOffColor(color) {
      this.colours[color].classList.remove("light");
   }

   addClickEve() {
      this.colours.simonGreen.addEventListener("click", this.chooseColor);
      this.colours.simonRed.addEventListener("click", this.chooseColor);
      this.colours.simonYellow.addEventListener("click", this.chooseColor);
      this.colours.simonBlue.addEventListener("click", this.chooseColor);
      clickableBtn.style.cursor = "pointer";
   }

   deleteClickEve() {
      this.colours.simonGreen.removeEventListener("click", this.chooseColor);
      this.colours.simonRed.removeEventListener("click", this.chooseColor);
      this.colours.simonYellow.removeEventListener("click", this.chooseColor);
      this.colours.simonBlue.removeEventListener("click", this.chooseColor);
      clickableBtn.style.cursor = "initial";
   }

   chooseColor(eve) {
      let nameOfColor = eve.target.dataset.color;
      let numberOfColor = this.colorToNumber(nameOfColor);
      this.turnOnColor(nameOfColor);
      if (numberOfColor === this.sequence[this.sublevel]) {
         this.sublevel++;
         if (this.sublevel === this.level) {
            this.level++;
            this.deleteClickEve();
            (this.level === (LEVELS + 1))
            ? console.log("We got a winner!")
            : setTimeout(this.levelUp, 2000);
         }
      } else {
         modal[1].classList.remove("hide");
         levelsPassed.textContent = (this.level - 1);
         playAgain.addEventListener("click", () => {
            startGame();
            modal[1].classList.add("hide");
         });
      }
   }
}

const startGame = () => {
   let game = new Game();
}