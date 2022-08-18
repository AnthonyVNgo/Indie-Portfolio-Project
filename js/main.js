const toggleButton = document.querySelector('#hamburger');
const logo = document.querySelector('.logo');
const menuItems = document.querySelector('.menu-items');
const menuItemUL = document.querySelector('.menu-item-ul');
const line1 = document.querySelector('#line1');
const line2 = document.querySelector('#line2');
const line3 = document.querySelector('#line3');

let clicked = false;

const showLogo = () => {
  logo.className = 'logo';
};

const hideLogo = () => {
  logo.className = 'hidden';
};

const showMenuItems = () => {
  menuItems.className = 'translate';
};

const hideMenuItems = () => {
  menuItems.className = 'menu-items';
};

const linesClicked = () => {
  line1.className = 'line line1 line1-clicked';
  line2.className = 'line line2 line2-clicked';
  line3.className = 'line line3 line3-clicked';
};

const linesUnclicked = () => {
  line1.className = 'line line1';
  line2.className = 'line line2';
  line3.className = 'line line3';
};

const toggleClicked = () => {
  hideLogo();
  showMenuItems();
  linesClicked();
};

const toggleUnclicked = () => {
  showLogo();
  hideMenuItems();
  linesUnclicked();
};

const toggleClickEventHandler = () => {
  clicked = !clicked;
  if (clicked === true) {
    toggleClicked();
  } else {
    toggleUnclicked();
  }
};

toggleButton.addEventListener('click', toggleClickEventHandler);

const menuItemClicked = () => {
  if (event.target.tagName === 'A') {
    toggleUnclicked();
    clicked = false;
  }
};

menuItemUL.addEventListener('click', menuItemClicked);
