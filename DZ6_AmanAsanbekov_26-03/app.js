document.addEventListener('DOMContentLoaded', function() {
    var num1Input = document.getElementById('num1');
    var num2Input = document.getElementById('num2');
    var addButton = document.getElementById('add');
    var subtractButton = document.getElementById('subtract');
    var divideButton = document.getElementById('divide');
    var equalsButton = document.getElementById('equals');
    var resultDiv = document.getElementById('result');
  

  addButton.addEventListener('click', function() {
    var num1 = parseFloat(num1Input.value);
    var num2 = parseFloat(num2Input.value);
    var sum = num1 + num2;
    resultDiv.textContent = 'Результат: ' + sum;
  });

  subtractButton.addEventListener('click', function() {
    var num1 = parseFloat(num1Input.value);
    var num2 = parseFloat(num2Input.value);
    var difference = num1 - num2;
    resultDiv.textContent = 'Результат: ' + difference;
  });

  divideButton.addEventListener('click', function() {
    var num1 = parseFloat(num1Input.value);
    var num2 = parseFloat(num2Input.value);
    var quotient = num1 / num2;
    resultDiv.textContent = 'Результат: ' + quotient;
  });

  equalsButton.addEventListener('click', function() {
    var num1 = parseFloat(num1Input.value);
    var num2 = parseFloat(num2Input.value);
    var result = num1 - num2;
    resultDiv.textContent = 'Результат: ' + result;
  });
});
