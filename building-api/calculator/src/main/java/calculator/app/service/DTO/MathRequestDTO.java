package calculator.app.service.DTO;

public class MathRequestDTO {
  int number1;
  int number2;
  char operator;

  public int getNumber1() {
    return number1;
  }

  public void setNumber1(int number1) {
    this.number1 = number1;
  }

  public int getNumber2() {
    return number2;
  }

  public void setNumber2(int number2) {
    this.number2 = number2;
  }

  public char getOperator() {
    return operator;
  }

  public void setOperator(char operator) {
    this.operator = operator;
  }

  @Override
  public String toString() {
    return "MathRequestDTO{"
        + "number1="
        + number1
        + ", operator="
        + operator
        + ", number2="
        + number2
        + "}";
  }
}
