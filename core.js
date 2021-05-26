let interfaceStatus = document.querySelector(".interface-checkbox");

interfaceStatus.addEventListener("click", listener);

function listener() {
   if (interfaceStatus.checked) {
      console.log("Classic");
   } else {
      console.log("Modern");
   }
}

