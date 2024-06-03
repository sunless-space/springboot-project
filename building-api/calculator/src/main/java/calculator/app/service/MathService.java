package calculator.app.service;

// import calculator.app.service.DTO.MathRequestDTO;
import calculator.app.service.DTO.*;
import org.springframework.stereotype.Service;

@Service
public class MathService {
  public MathResponse add(MathRequestDTO mathRequestDTO) {
    // get numbers from Data Transfer Object
    int number1 = mathRequestDTO.getNumber1();
    int number2 = mathRequestDTO.getNumber2();

    // calculate sum
    int sum = number1 + number2;

    // print values including sum
    System.out.println("Number1: " + number1 + " Number2: " + number2 + " Sum: " + sum);

    // generate response in json format
    MathResponse mathResponse = new MathResponse();
    mathResponse.setNumber1(number1);
    mathResponse.setNumber2(number2);
    mathResponse.setSum(sum);

    // export the mathResponse object created above
    return mathResponse;
  }
}
