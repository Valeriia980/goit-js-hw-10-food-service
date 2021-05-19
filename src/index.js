import './styles.css';
import dishes from './menu.json';
import refs from './js/refs';
import menuCardTpl from './templates/menu.hbs';
import { makeTheme } from './js/makeTheme'

const menuCardsMarkup = menuCardTpl(dishes);

if (localStorage.getItem('themColor')) {
  refs.body.classList.add(localStorage.getItem('themColor'));
}

if (refs.body.classList.contains('dark-theme')) {
  refs.themeSwitch.checked = true;
}

refs.themeSwitch.addEventListener('change', makeTheme);
refs.menu.insertAdjacentHTML('beforeend', menuCardsMarkup);