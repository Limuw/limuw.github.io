const boldButton = document.getElementById("bold");
const italicButton = document.getElementById("italic");
const underlineButton = document.getElementById("underline");
const textArea = document.getElementById("text-area");

boldButton.addEventListener("click", () => {
  if (textArea.style.fontWeight === "bold") {
    textArea.style.fontWeight = "normal";
  } else {
    textArea.style.fontWeight = "bold";
  }
});

italicButton.addEventListener("click", () => {
  if (textArea.style.fontStyle === "italic") {
    textArea.style.fontStyle = "normal";
  } else {
    textArea.style.fontStyle = "italic";
  }
});

underlineButton.addEventListener("click", () => {
  if (textArea.style.textDecoration === "underline") {
    textArea.style.textDecoration = "none";
  } else {
    textArea.style.textDecoration = "underline";
  }
});

const saveButton = document.getElementById("save");
const openButton = document.getElementById("open");

saveButton.addEventListener("click", () => {
  const text = textArea.value;
  const filename = "document.txt";
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  saveAs(blob, filename);
});

openButton.addEventListener("click", () => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "text/plain";

  input.onchange = () => {
    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      textArea.value = reader.result;
    };

    reader.readAsText(file);
  };

  input.click();
});

