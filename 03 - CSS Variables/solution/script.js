const controls = document.querySelectorAll('.controls input');

const handler = (e) => {
  const value = e.target.dataset.sizing ? e.target.value+'px' : e.target.value;
  document.documentElement.style.setProperty(`--${e.target.name}`, value);
}

[].forEach.call(controls, it => {
  it.addEventListener('change', handler);
  it.addEventListener('mousemove', handler);
});


