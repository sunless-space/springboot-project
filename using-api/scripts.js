/********** Calculator with JS ***********/
function apiCalculate() {
  const number1 = parseInt(document.getElementById("apiN1").value);
  const operator = document.getElementById("apiOper").value;
  const number2 = parseInt(document.getElementById("apiN2").value);

  // transform data to object in JSON format
  const apiReq = new Object();
  apiReq.number1 = number1;
  apiReq.operator = operator;
  apiReq.number2 = number2;

  const apiJsonString = JSON.stringify(apiReq);

  // checking the payload
  console.log(apiJsonString);

  // sending payload to the api
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost:8080/api/arithmetic/calculate");
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(apiJsonString);
}

/********** SMS API Integration ***********/
function sendSMS() {
  // values from the form
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const message = document.getElementById("message").value;

  // transform data to object in JSON format
  const req = new Object();
  req.from = from;
  req.to = to;
  req.message = message;
  const jsonString = JSON.stringify(req);

  // checking the payload
  console.log(jsonString);

  // connecting to the api
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://api.tiaraconnect.io/api/messaging/sendsms");
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.setRequestHeader(
    "Authorization",
    "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzNjEiLCJvaWQiOjM2MSwidWlkIjoiODY4YTJjOWEtZGI0NS00YmE4LWI1MTUtY2IyZmY1MDhlNzMxIiwiYXBpZCI6MjkwLCJpYXQiOjE3MTYyOTM5MjksImV4cCI6MjA1NjI5MzkyOX0.hZg81198mFDuQlkfCvOGsDdyPGjuKZ_kuH_E1VI2i6onXT0z6hVHhZUAXfgrvibZNdOjZdK9tj9q-YcMXcjshQ",
  );

  // sending data to the api
  xhttp.send(jsonString);
}

/********** Calculator with JS ***********/
function calculate() {
  const value1 = parseInt(document.getElementById("n1").value);
  const operator = document.getElementById("oper").value;
  const value2 = parseInt(document.getElementById("n2").value);

  // calculations based on the operator
  switch (operator) {
    case "+":
      res = value1 + value2;
      break;
    case "-":
      res = value1 - value2;
      break;
    case "*":
      res = value1 * value2;
      break;
    case "/":
      res = value1 / value2;
      break;
    case "^":
      res = value1 ** value2;
      break;
    /* plan b for power
    case "**":
      res = Math.pow(value1,value2);
      break;
    */

    default:
      alert("invalid input");
      console.log("invalid input");
  }

  // display results
  console.log("Result is " + res);

  document.getElementById("result").innerText = "Result is " + res;
}

/********** Aesthetics ***********/
document.querySelector(".calc-api").addEventListener("click", () => {
  document.querySelectorAll("form")[0].classList.toggle("fold");
});
document.querySelector(".sms").addEventListener("click", () => {
  document.querySelectorAll("form")[1].classList.toggle("fold");
});
document.querySelector(".calc").addEventListener("click", () => {
  document.querySelectorAll("form")[2].classList.toggle("fold");
});
document.querySelector("p").addEventListener("click", () => {
  document.querySelector("p").classList.toggle("fold");
});
