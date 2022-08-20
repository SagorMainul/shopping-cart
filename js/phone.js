function updatePhoneNumber (isIncrease) {
  const phoneNumberFiled = document.getElementById('phone-number-field')
  const phoneNumberString = phoneNumberFiled.value
  const previousPhonenUmber = parseInt(phoneNumberString)

  let newPhoneNumber

  if (isIncrease === true) {
    newPhoneNumber = previousPhonenUmber + 1
  } else {
    isIncrease !== false
    newPhoneNumber = previousPhonenUmber - 1
  }
  phoneNumberFiled.value = newPhoneNumber
  return newPhoneNumber
}
function upatePhonePrice (newPhoneNumber) {
  const phoneTotalPrice = newPhoneNumber * 1219
  const phoneTotalElement = document.getElementById('phone-total')
  phoneTotalElement.innerText = phoneTotalPrice
}

function getTextElementValueById (elementId) {
  const phoneTotalElement = document.getElementById(elementId)
  const currentPhoneTotalString = phoneTotalElement.innerText
  const currentPhoneTotal = parseInt(currentPhoneTotalString)
  return currentPhoneTotal
}

function setTaxElementValueByID (elementId, value) {
  const subTotalElement = document.getElementById(elementId)

  subTotalElement.innerText = value
}

function calculateSubTotal () {
  //calculatetotal
  const currentPhoneTotal = getTextElementValueById('phone-total')
  const currentCaseTotal = getTextElementValueById('case-total')
  const currentSubTotal = currentPhoneTotal + currentCaseTotal

  setTaxElementValueByID('sub-total', currentSubTotal)

  //calculate tax
  const taxAmountString = (currentSubTotal * 0.1).toFixed(2)
  const taxAmount = parseFloat(taxAmountString)
  setTaxElementValueByID('tax-amount', taxAmount)
  const finalAmount = currentSubTotal + taxAmount
  setTaxElementValueByID('final-total', finalAmount)
}

document
  .getElementById('btn-phone-plus')
  .addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(true)
    upatePhonePrice(newPhoneNumber)
    calculateSubTotal()
  })
document
  .getElementById('btn-phone-minus')
  .addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(false)
    upatePhonePrice(newPhoneNumber)
    calculateSubTotal()
  })
