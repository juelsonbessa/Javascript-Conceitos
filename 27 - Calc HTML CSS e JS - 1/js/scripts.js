const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class Calculator{
  constructor(previousOperationText, currentOperationText){
    this.previousOperationText = previousOperationText;
    this.currentOperationText = currentOperationText;
    this.currentOperation = "";
  }

  //Adicionar digitos na tela da caluladora
  addDigit(digit){

    if(digit == "." && this.currentOperationText.innerHTML.includes(".")){
      return;
    }
    this.currentOperation = digit;
    this.updateScreen();
  }

  //Processar oerações na calculadora
  processOperation(operation){

    if(this.currentOperationText.innerHTML === "" && operation !== "C"){
      if(this.previousOperationText.innerHTML !== ""){
        this.changeOperation(operation);
      }
      return;
    }
    let operationValue;
    const previous = +this.previousOperationText.innerHTML.split(" ")[0];
    const current = + this.currentOperationText.innerHTML;

    switch (operation) {
      case '+':
          operationValue = previous + current;
          this.updateScreen(operationValue, operation, current, previous);
        break;
      case '-':
          operationValue = previous - current;
          this.updateScreen(operationValue, operation, current, previous);
        break;
      case '/':
          operationValue = previous / current;
          this.updateScreen(operationValue, operation, current, previous);
        break;
      case '*':
          operationValue = previous * current;
          this.updateScreen(operationValue, operation, current, previous);
        break;
      case 'DEL':
          this.processDelOperation();
        break;
      case 'CE':
          this.processClearCurrentOperation();
        break;
      case '=':
          this.processEqualOperatior();
        break;
    
      default:
        break;
    }
  }

  //Modificar valores na tela da calculadora
  updateScreen(operationValue = null, operation = null,current = null, previous = null){

    
    if(operationValue == null){
      this.currentOperationText.innerHTML += this.currentOperation;
    }else{
      if(previous == 0){
        operationValue = current;
      }
      this.previousOperationText.innerHTML = `${operationValue} ${operation}`;
      this.currentOperationText.innerHTML = ""
    }
  }

  changeOperation(operation){

    const mathOperation = ["*", "/", "-", "+"];

    if(!mathOperation.includes(operation)){
      return;
    }
    this.previousOperationText.innerHTML = previousOperationText.innerHTML.slice(0, -1) + operation;
  }

  processDelOperation(){
    this.currentOperationText.innerHTML = currentOperationText.innerHTML.slice(0, -1);
  }
  processClearCurrentOperation(){
    this.currentOperationText.innerHTML = "";
  }
  processClearAllOperation(){
    this.currentOperationText.innerHTML = "";
    this.previousOperationText.innerHTML = "";
  }

  processEqualOperatior(){
    let operation = this.previousOperationText.innerHTML.split(" ")[1];

    this.processOperation(operation);
  }

}

const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerHTML;

    if(+value >= 0 || value === "."){
      calc.addDigit(value);
    }else{
      calc.processOperation(value);
    }
  })
})

