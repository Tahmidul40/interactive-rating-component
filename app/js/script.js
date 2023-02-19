const submitBtn = document.getElementById("submit-btn");
const rating = document.getElementById("rating");
const result = document.getElementById("result");
const ratingRender = document.getElementById("rating-render");
const hint = document.getElementById("hint");
// rating number
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");

let newRating = 0;

one.addEventListener("click", function () {
  newRating = 1;
  one.classList.add("mark");
  two.classList.remove("mark");
  three.classList.remove("mark");
  four.classList.remove("mark");
  five.classList.remove("mark");
});

two.addEventListener("click", function () {
  newRating = 2;
  one.classList.remove("mark");
  two.classList.add("mark");
  three.classList.remove("mark");
  four.classList.remove("mark");
  five.classList.remove("mark");
});

three.addEventListener("click", function () {
  newRating = 3;
  one.classList.remove("mark");
  two.classList.remove("mark");
  three.classList.add("mark");
  four.classList.remove("mark");
  five.classList.remove("mark");
});

four.addEventListener("click", function () {
  newRating = 4;
  one.classList.remove("mark");
  two.classList.remove("mark");
  three.classList.remove("mark");
  four.classList.add("mark");
  five.classList.remove("mark");
});

five.addEventListener("click", function () {
  newRating = 5;
  one.classList.remove("mark");
  two.classList.remove("mark");
  three.classList.remove("mark");
  four.classList.remove("mark");
  five.classList.add("mark");
});

submitBtn.addEventListener("click", function () {
  if (newRating == 0) {
    hint.textContent = "Please select rating.";
  } else {
    console.log(newRating);
    ratingRender.textContent = newRating;
    rating.classList.toggle("hide");
    result.classList.toggle("show");
  }
});
