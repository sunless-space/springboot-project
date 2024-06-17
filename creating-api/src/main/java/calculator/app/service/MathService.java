package calculator.app.service;

import calculator.app.service.DTO.*;
import org.springframework.stereotype.Service;

@Service
public class MathService {
  double result;

  public MathResponse add(MathRequestDTO mathRequestDTO) {
    // get numbers from Data Transfer Object
    int number1 = mathRequestDTO.getNumber1();
    char operator = mathRequestDTO.getOperator();
    int number2 = mathRequestDTO.getNumber2();

    // calculate result
    switch (operator) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      case '/':
        result = number1 / number2;
        break;
      case '^':
        result = Math.pow(number1, number2);
        break;
      default:
        System.out.println("Invalid input");
    }

    // print values including sum
    System.out.println(
        "Number1: "
            + number1
            + " Operator: "
            + operator
            + " Number2: "
            + number2
            + " Result: "
            + result);

    // generate response in json format
    MathResponse mathResponse = new MathResponse();
    mathResponse.setNumber1(number1);
    mathResponse.setOperator(operator);
    mathResponse.setNumber2(number2);
    mathResponse.setResult(result);

    // export the mathResponse object created above
    return mathResponse;
  }
}
