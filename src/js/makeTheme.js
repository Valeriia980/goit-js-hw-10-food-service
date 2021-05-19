import refs from './refs';

const themeColor = {
  DARK: 'dark-theme',
  LIGHT: 'light-theme',
};

const changeBodyClass = (addClass, removeClass) => {
  refs.body.classList.remove(removeClass);
  refs.body.classList.add(addClass);
  localStorage.setItem('themColor', addClass);
}

const makeTheme = () => {
  if (refs.body.classList.contains(themeColor.DARK)) {
    changeBodyClass(themeColor.LIGHT, themeColor.DARK)   
  } else {
    changeBodyClass(themeColor.DARK, themeColor.LIGHT)    
  }
};


export { makeTheme };