const op   = process.argv[2]
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

if (!isNaN(num1) && !isNaN(num2)) {
  if(op == '+'){
    console.log(num1 + num2)
  }
  else if(op == '-'){
    console.log(num1 - num2)
  }
  else if(op == '*'){
    console.log(num1 * num2)
  }
  else if(op == '/'){
    console.log(num1 / num2)
  }
  else{
    console.log("invalid operation")
  }
}
