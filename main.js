const rabbits = document.querySelectorAll(".rabbit");
const score = document.getElementById("score");

let count = 0;

rabbits.forEach((rabbit) => {
  rabbit.addEventListener("click", () => {
    const currentSpeed = parseFloat(getComputedStyle(rabbit).animationDuration);
    const newSpeed = currentSpeed - 0.1;

    count = count + 1;
    score.textContent = count;

    rabbit.style.animationDuration = `${newSpeed}s`;
  });
});
