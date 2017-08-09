export class InputSet {
  inputDom:HTMLInputElement;
  initialBorderColor: string;
  constructor(input:HTMLInputElement){
    this.inputDom = input;
    this.initialBorderColor= input.style.borderColor;
  }
  normal() {
    this.inputDom.style.borderColor = this.initialBorderColor;
    return this;
  }

  warn() {
    this.inputDom.style.borderColor = '#CE584A';
    return this;
  }

  success(){
    this.inputDom.style.borderColor = '#588CEE';
    return this;
  }
}