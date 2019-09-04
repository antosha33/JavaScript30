function playSound(e){
  const el = e.keyCode ? document.querySelector(`div[data-key="${e.keyCode}"]`) : e.currentTarget;
  if(!el) return;
  const audio = e.keyCode ? document.querySelector(`audio[data-key="${e.keyCode}"]`): document.querySelector(`audio[data-key="${el.getAttribute('data-key')}"]`);
  el.classList.add('playing');
  audio.currentTime=0; //rewinds it to the start for hitting it in succession
  audio.play();
}; 

function removePlaying(e){
if(e.propertyName !== 'transform') return;
 this.classList.remove('playing');
}

window.addEventListener('keydown', playSound);

const keys = document.getElementsByClassName('key');

[].forEach.call(keys, (it)=>{
  it.addEventListener('transitionend', removePlaying);
  it.addEventListener('mousedown', playSound);
})