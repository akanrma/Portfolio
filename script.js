const text = [
  "> Hello, I’m Akansha Sharma.",
  "> A passionate Web Developer.",
  "> I create modern and responsive websites.",
  "> Welcome to my portfolio!"
];

let line = 0;
let char = 0;
const typingText = document.getElementById("typing-text");

function typeLine() {
  if (line < text.length) {
    if (char < text[line].length) {
      typingText.innerHTML += text[line].charAt(char);
      char++;
      setTimeout(typeLine, 50);
    } else {
      typingText.innerHTML += "<br/>";
      line++;
      char = 0;
      setTimeout(typeLine, 500);
    }
  }
}

typeLine();
