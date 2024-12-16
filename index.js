const btn = document.querySelectorAll(".btn");
const displayBtn = document.querySelector(".calc-view");
const equal = document.querySelector(".equal");
const operate = document.querySelectorAll(".operate");
const del = document.querySelector(".delete");
const reset = document.querySelector(".reset");

//THEME CHANGING
const btnToggle = document.querySelectorAll(".box");
const container = document.querySelector(".container");
const indicate = document.querySelector(".indicator");
const [first, second, third] = btnToggle;
let num = 0;

btn.forEach((button) => {
  button.addEventListener("click", () => {
    // console.log(button.textContent);
    displayBtn.value += button.textContent;
  });
});

operate.forEach((opp) => {
  opp.addEventListener("click", () => {
    if (!displayBtn.value.includes(opp.textContent)) {
      displayBtn.value += opp.textContent;
    }
  });
});

equal.addEventListener("click", () => {
  if (!displayBtn.value) {
    displayBtn.value = "Error";
  } else {
    try {
      const result = eval(displayBtn.value.replace("x", "*"));
      displayBtn.value = result;
    } catch (error) {
      displayBtn.value = "err";
    }
  }
});

del.addEventListener("click", () => {
  displayBtn.value = displayBtn.value.slice(0, -1);
});

reset.addEventListener("click", () => {
  displayBtn.value = "";
});

// indicate.addEventListener("click", () => {
//   num = (num + 1) % 3;

//   if (num === 0) {
//     console.log(num);
//     indicate.style.marginLeft = "0";
//     container.classList.remove("container-t2");
//     container.classList.remove("container-t3");
//   }
//   if (num === 1) {
//     container.classList.add("container-t2");
//     indicate.style.marginLeft = `${num * 1.8}rem`;
//     console.log(num);
//   }
//   if (num === 2) {
//     container.classList.add("container-t3");
//     indicate.style.marginLeft = `${num * 1.8}rem`;
//     console.log(num);
//   }

//   //   indicate.style.marginLeft = "1.8rem";
//   //   container.remove();
// });

//SECOND METHOD OF HANDLING THE TOGGLE BUTTON
first.addEventListener("click", () => {
  indicate.style.marginLeft = "0";
  container.classList.remove("container-t2");
  container.classList.remove("container-t3");
});
second.addEventListener("click", () => {
  indicate.style.marginLeft = "1.8rem";
  container.classList.remove("container-t3");
  container.classList.add("container-t2");
});
third.addEventListener("click", () => {
  indicate.style.marginLeft = "3.6rem";
  container.classList.remove("container-t2");
  container.classList.add("container-t3");
});
