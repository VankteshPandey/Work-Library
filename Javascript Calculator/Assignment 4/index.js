document.getElementById('calculateBtn').addEventListener('click', ()=>{
  const num1 = parseFloat(document.getElementById('num1').value)
  const num2 = parseFloat(document.getElementById('num2').value)
  const operator = document.getElementById('operator').value

  let result ='';
  switch(operator) {
    case '+':
    result = num1 + num2
    break;
    case '-':
      result = num1 - num2
    break;
    
    case '*':
        result = num1 * num2
    break;
    
    case '/':
      if (num2 != 0){

        result = num1 / num2
      }
      else{
        result = "not define"
      }
        break;
    
  }
  document.getElementById('result').value = result;
});

document.getElementById('num1').addEventListener('click', ()=>{
  document.getElementById('result').value = 0
});
document.getElementById('num2').addEventListener('click', ()=>{
  document.getElementById('result').value = 0
});
document.getElementById('operator').addEventListener('click', ()=>{
  document.getElementById('result').value = 0
});