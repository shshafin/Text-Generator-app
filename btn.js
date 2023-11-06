let count = 0;

document.getElementById("plus-btn").addEventListener("click", function () {
  const heading = document.getElementById("num0");
  heading.innerText = ++count;
});

document.getElementById("minus-btn").addEventListener("click", function () {
  const heading = document.getElementById("num0");
  heading.innerText = --count;
});
