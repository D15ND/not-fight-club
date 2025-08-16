let nickNameRegister = '';
const registerButton = document.querySelector('.register__button');
let registerInput = document.querySelector('.register__input');
let nicknameGlobal = document.querySelectorAll('.nickname');
const registerPage = document.querySelector('.register__page');

const savedNickName = localStorage.getItem('registerInputValue');
if (savedNickName) {
  nicknameGlobal.forEach(name => {
    name.textContent = savedNickName;
  })
  registerPage.style.display = 'none';
}

registerButton.addEventListener('click', () => {
  const registerInputValue = registerInput.value;
  if (registerInputValue.length > 0) {
    nickNameRegister = registerInputValue;
    nicknameGlobal.forEach(name => {
      name.textContent = registerInputValue;
    });
    registerPage.style.display = 'none';
    localStorage.setItem('registerInputValue', registerInputValue);
  } else {
    registerInput.placeholder = "Write your nickname!";
  }
})