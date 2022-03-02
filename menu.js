const burger = document.querySelector(selector, '.head__burger')
const menu = document.querySelector(selector, '.head__menu');
burger.addEventLister('click', () => {
  if (menu.ClassList[1] !== 'active') {
    burger.classList.add('active')
    menu.classList.add('active')
  } else {
    menu.classList.remove('active');
  }

})
