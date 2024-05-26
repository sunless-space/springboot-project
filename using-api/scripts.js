// calculator
function calculate() {
  const value1 = parseInt(document.getElementById('n1').value)
  const operator = document.getElementById('oper').value
  const value2 = parseInt(document.getElementById('n2').value)

  // calculations based on the operator
  switch (operator) {
    case '+':
      res = value1 + value2
      break
    case '-':
      res = value1 - value2
      break
    case '*':
      res = value1 * value2
      break
    case '/':
      res = value1 / value2
      break

    default:
      alert('invalid input')
      console.log('invalid input')
  }

  // display results
  console.log('Result is ' + res)

  document.getElementById('result').innerText = 'Result is ' + res
}

// sms api integration
function sendSMS() {
  // values from the form
  const from = document.getElementById('from').value
  const to = document.getElementById('to').value
  const message = document.getElementById('message').value

  // request data from user
  const req = new Object()
  req.from = from
  req.to = to
  req.message = message

  const jsonString = JSON.stringify(req)

  // checking the payload
  console.log(jsonString)

  // connecting to the api
  const xhttp = new XMLHttpRequest()
  xhttp.open('POST', 'https://api.tiaraconnect.io/api/messaging/sendsms')
  xhttp.setRequestHeader('Content-type', 'application/json')
  xhttp.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzNjEiLCJvaWQiOjM2MSwidWlkIjoiODY4YTJjOWEtZGI0NS00YmE4LWI1MTUtY2IyZmY1MDhlNzMxIiwiYXBpZCI6MjkwLCJpYXQiOjE3MTYyOTM5MjksImV4cCI6MjA1NjI5MzkyOX0.hZg81198mFDuQlkfCvOGsDdyPGjuKZ_kuH_E1VI2i6onXT0z6hVHhZUAXfgrvibZNdOjZdK9tj9q-YcMXcjshQ')

  // sending data to the api
  xhttp.send(jsonString)
}

/*
// sms integration in the calculator
function sendRes() {
  const solution = new Object()
  req.num1 = value1
  req.operator = operator
  req.num2 = value2
  req.res = res

  const jsonRes = JSON.stringify(solution)
  // checking the payload
  console.log(solution)

  // connecting to the api
  const xhttp = new XMLHttpRequest()
  xhttp.open('POST', 'https://api.tiaraconnect.io/api/messaging/sendsms')
  xhttp.setRequestHeader('Content-type', 'application/json')
  xhttp.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzNjEiLCJvaWQiOjM2MSwidWlkIjoiODY4YTJjOWEtZGI0NS00YmE4LWI1MTUtY2IyZmY1MDhlNzMxIiwiYXBpZCI6MjkwLCJpYXQiOjE3MTYyOTM5MjksImV4cCI6MjA1NjI5MzkyOX0.hZg81198mFDuQlkfCvOGsDdyPGjuKZ_kuH_E1VI2i6onXT0z6hVHhZUAXfgrvibZNdOjZdK9tj9q-YcMXcjshQ')

  // sending data to the api
  xhttp.send(jsonRes)
  */
