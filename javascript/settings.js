const settingsButton = document.querySelector('.settings__icon');
const settingsPopup = document.querySelector('.settings__popup');
const settingsPopupCloseButton = document.querySelector('.close__settings-btn');
const edditButton = document.querySelector('.edit__button');
const correctNewNicknameBlock = document.querySelector('.save__block');
const newNicknameInput = document.querySelector('.new__nickname');
const saveNewNickName = document.querySelector('.save__new-nickname');
let nicknameGlobal = document.querySelectorAll('.nickname');

const savedNickName = localStorage.getItem('registerInputValue');
if (savedNickName) {
  nicknameGlobal.forEach(name => {
    name.textContent = savedNickName;
  })
};

settingsButton.addEventListener('click', () => {
  settingsPopup.style.display = 'flex';
})

settingsPopupCloseButton.addEventListener('click', () => {
  settingsPopup.style.display = 'none';
  correctNewNicknameBlock.classList.remove('visibilityOpen');
})

edditButton.addEventListener('click', () => {
  correctNewNicknameBlock.classList.toggle('visibilityOpen');
})

saveNewNickName.addEventListener('click', () => {
  const registerInputValue = newNicknameInput.value;
  if (registerInputValue.length > 0) {
    nicknameGlobal.forEach(name => {
      name.textContent = registerInputValue;
    });
    localStorage.setItem('registerInputValue', registerInputValue);
  }
});