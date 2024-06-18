package calculator.app.web.rest;

import calculator.app.service.DTO.MathRequestDTO;
import calculator.app.service.DTO.MathResponse;
import calculator.app.service.MathService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/arithmetic")
public class MathController {
  MathService mathService = new MathService();

  @PostMapping("/calculate")
  public MathResponse calculation(@RequestBody MathRequestDTO mathRequestDTO) {
    System.out.println("Received DTO: " + mathRequestDTO);
    return mathService.add(mathRequestDTO);
  }
}