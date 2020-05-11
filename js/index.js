var oper; //выбранный оператор
  function func() {
    var result;
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    switch (oper) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2) {
          result = num1 / num2;
        } else {
          result = '';
        }
        break;
      default:
        result = 'chose';
    }

    document.getElementById("result").innerHTML = result;
  }