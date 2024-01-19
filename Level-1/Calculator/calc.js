function appendCharacter(char) {
    document.getElementById('result').value += char;
  }

  function clearResult() {
    document.getElementById('result').value = '';
  }

  function backspace() {
    let currentResult = document.getElementById('result').value;
    document.getElementById('result').value = currentResult.slice(0, -1);
  }

  function calculateResult() {
    try {
      let expression = document.getElementById('result').value;
      let result = eval(expression);
      document.getElementById('result').value = result;
    } catch (error) {
      document.getElementById('result').value = 'Error';
    }
  }