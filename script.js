function press(char) {
  const disp = document.getElementById('display');
  // Optional: avoid duplicate dots/operators
  disp.value += char;
}

function calculate() {
  const disp = document.getElementById('display');
  try {
    disp.value = eval(disp.value);
  } catch {
    disp.value = 'Error';
  }
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function backspace() {
  const disp = document.getElementById('display');
  disp.value = disp.value.slice(0, -1);
}
