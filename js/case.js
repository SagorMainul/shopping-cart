/*
1. addeventliseter add
2. get the value insdie the case number field(input field)
3.convert the number to an integer
4. calculate the new case number
5. set the value to the case number
*/

function updateCaseNumber (isIncrease) {
  const caseNumberField = document.getElementById('case-number-field')
  const caseNumberString = caseNumberField.value
  const caseNumberValue = parseInt(caseNumberString)

  let newCaseNumer
  if (isIncrease === true) {
    newCaseNumer = caseNumberValue + 1
  } else {
    isIncrease !== false
    newCaseNumer = caseNumberValue - 1
  }
  caseNumberField.value = newCaseNumer
  return newCaseNumer
}

function newTotalPrice () {
  const newTotalPrice = newCaseNumer * 59
  const caseTotalElement = document.getElementById('case-total')
  caseTotalElement.innerText = newTotalPrice
}

document.getElementById('btn-case-plus').addEventListener('click', function () {
  newCaseNumer = updateCaseNumber(true)
  newTotalPrice()
  calculateSubTotal()
})

document
  .getElementById('btn-case-minus')
  .addEventListener('click', function () {
    newCaseNumer = updateCaseNumber(false)
    newTotalPrice()
    calculateSubTotal()
  })
