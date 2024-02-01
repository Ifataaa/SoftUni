function solve() {
  let text = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;

  text = text.toLowerCase();

  let result = "";
  let textArr = text.split(' ');

  if (convention == "Camel Case") {
    result = textArr.shift();
    for (let word of textArr) {
      result += word[0].toUpperCase() + word.substring(1);
    }
  } else if (convention == "Pascal Case") {
    for (let word of textArr) {
      result += word[0].toUpperCase() + word.substring(1);
    }
  } else {
    result = "Error!"
  }
  document.getElementById('result').textContent = result
}