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
