function removeTask(button) {
  const h2 = button.parentElement;
  h2.remove();
}
document.getElementById("todoButton").addEventListener("click", function () {
  const textArea = document.getElementById("text");
  const textValue = textArea.value;

  const parent = document.getElementById("h1");
  const h2 = document.createElement("h2");
  h2.innerHTML = `
        ${textValue}
        <button onclick='removeTask(this)' class=" btn btn-outline btn-primary ml-12 mt-4">Remove</button>
        `;
  parent.appendChild(h2);
  textArea.value = " ";
});
