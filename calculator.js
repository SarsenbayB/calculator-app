const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function performOperation(operator, num1, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        throw new Error("Division by zero is not allowed.");
      }
      return num1 / num2;
    default:
      throw new Error("Invalid operator. Please use +, -, *, or /.");
  }
}

rl.question('Enter the first number: ', (num1) => {
  rl.question('Enter an operator (+, -, *, /): ', (operator) => {
    rl.question('Enter the second number: ', (num2) => {
      try {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        const result = performOperation(operator, num1, num2);
        console.log(`Result: ${result}`);
      } catch (error) {
        console.error(`Error: ${error.message}`);
      } finally {
        rl.close();
      }
    });
  });
});
