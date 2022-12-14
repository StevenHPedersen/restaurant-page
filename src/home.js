import tagMaker from "./tagMaker";
import Background from './images/shrimp-portrait.jpg';

function mainElement() {  
  console.log('home page');
  const leftSide = tagMaker('div', 'left-main');
  const myBackground = new Image();
  myBackground.src = Background;

  leftSide.appendChild(myBackground);

  const rightSide = tagMaker('div', 'right-main');
  const article = tagMaker('article', false, 'Where actual dreams come true');

  const orderLink = tagMaker('a', false, 'Place an order today!');
  orderLink.href = '#';

  rightSide.appendChild(article);
  rightSide.appendChild(orderLink);

  const main = tagMaker('main', 'home');
  main.appendChild(leftSide);
  main.appendChild(rightSide);

  return main;
};

function main(domElement) {
  domElement.firstElementChild.after(mainElement());
}

export { main }