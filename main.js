const rabbit = document.querySelectorAll(".rabbit");
const score = document.getElementById("score");

let count = 0;

rabbit.forEach((element) => {
  element.addEventListener("click", () => {
    count = count + 1;
    score.textContent = count;
  });
});
