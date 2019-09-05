const panels = document.querySelectorAll('.panel');

const changeFlexGrow = (e) => {
  panels.forEach(panel => {
    if (panel !== e.currentTarget) {
      if (panel.classList.contains('open-active')) {
        panel.classList.remove('open');
      }
    }
  });
 e.currentTarget.classList.toggle('open');
}

const addTitles = (e) => {
  if(e.propertyName === 'flex-grow'){
    e.currentTarget.classList.toggle('open-active');
  }
}

panels.forEach((panel) => panel.addEventListener('click', changeFlexGrow));
panels.forEach((panel) => panel.addEventListener('transitionend', addTitles));