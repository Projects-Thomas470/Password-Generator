const copyButton = document.querySelector('.actions__copy')
const generateButton = document.querySelector('.actions__generate')
const popupElement = document.querySelector('.popup')
const passwordOutput = document.querySelector('.password-output')

const animationForPopup = 'popup-animation'
let password = ''

function copyToClipboard(text){
  navigator.clipboard.writeText(text)
}

function generatePassword(){
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()'
  const lengthPassword = 8
  password = ''
  for(let i = 0; i < lengthPassword; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length))
  }

  return password
}

generateButton.addEventListener('click', () => {
  passwordOutput.innerHTML = generatePassword()
})

copyButton.addEventListener('click', () => {
  copyToClipboard(password)
  popupElement.classList.add(animationForPopup)
})

popupElement.addEventListener('animationend', () => {
  popupElement.classList.remove(animationForPopup)
})