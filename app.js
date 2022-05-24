const burger = document.getElementsByClassName('header-burger');
const menu = document.getElementsByClassName('header-menu');

burger[0].onclick = function() {
  if (burger[0].classList.contains('active') && menu[0].classList.contains('active')) {
    burger[0].classList.remove('active');
    menu[0].classList.remove('active');
    return
  }
  burger[0].classList.add('active');
  menu[0].classList.add('active');

}
