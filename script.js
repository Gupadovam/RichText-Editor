const textInput = document.getElementById("text-input");

// Save content to a file
document.getElementById("save-btn").addEventListener("click", function () {
  const text = textInput.innerHTML;
  const blob = new Blob([text], { type: "text/html" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "editor_content.html";
  link.click();
});

// Format buttons
document.querySelectorAll(".option-button").forEach(button => {
  button.addEventListener("click", () => {
    const command = button.id;
    document.execCommand(command, false, null);
  });
});

// Advanced formatting for select options
document.querySelectorAll(".adv-option-button").forEach(button => {
  button.addEventListener("change", () => {
    const command = button.id;
    const value = button.value;
    document.execCommand(command, false, value);
  });
});

// Link creation
document.getElementById("createLink").addEventListener("click", () => {
  const url = prompt("Enter the URL");
  if (url) {
    document.execCommand("createLink", false, url);
  }
});

// Fonts and sizes
const fontNames = ["Arial", "Verdana", "Times New Roman", "Courier New", "Poppins"];
const fontSize = [1, 2, 3, 4, 5, 6, 7];

const fontNameSelect = document.getElementById("fontName");
const fontSizeSelect = document.getElementById("fontSize");

fontNames.forEach(font => {
  const option = document.createElement("option");
  option.value = font;
  option.innerHTML = font;
  fontNameSelect.appendChild(option);
});

fontSize.forEach(size => {
  const option = document.createElement("option");
  option.value = size;
  option.innerHTML = size;
  fontSizeSelect.appendChild(option);
});