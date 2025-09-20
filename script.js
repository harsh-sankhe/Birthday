/* === CONFIG === */
const MAIN_PHOTO = "images/photo1.jpg";
const TYPED_TEXT = [
  "Happy 19th Birthday Purva 🥳 . Tula nhi mahit me kiti lucky consider karto ki mala tujha sarkhi evdi changli girlfriend bhetli aahe asach humesha sathi majha sobat raha ♥️ . Me ky pan pagal sarkha bolla tari wait nko vatun gheu 😅 . Khup jast changla abhyas kar swata var focus kar health changli thev (Drink More Water 💧 ) ky sangycha asel tar sangat ja mana madhe nko thevat jaus samjle na 🙂 . Mag tya nantr tula convince pan karycha aahe na parents la maja sathi tya sathi pan strong ban career oriented raha mag tya nantr Harsh oriented raha (tujha attention aavdto mala) 😍 . Aapli relationship khup strong rahun de 💕 . Aani ek mekan var prem asach increase hot rahun de 💘 . Aata sathi evdech khup ky bolyche aahe mala ajun pan te tar bolel ach aapan aaj tujha special day aahe te enjoy kar ☺️ . Aani ha exclusive web page aahe fakt tujha sathi banvla aahe me khup efforts gele aahe pan tevde tar karuch shakto me karan I Love You Purva ❤️😘🥰 . Mahnun ha web page kona sobat share nko karu 😏 . 🎊 पुन्हा एकदा पूर्वा, वाढदिवसाच्या खूप खूप शुभेच्छा 🎊 ."
];

/* === main photo === */
(function mainPhoto(){
  const img = document.getElementById('mainPhoto');
  if(img){
    img.src = MAIN_PHOTO;
    img.style.opacity = 0;
    img.onload = () => {
      img.style.transition = 'opacity .9s ease, transform .9s cubic-bezier(.2,.9,.3,1)';
      img.style.opacity = 1;
    };
  }
})();

/* === typed text === */
(function typedInit(){
  const el = document.getElementById('typed');
  if(!el) return;
  const lines = TYPED_TEXT;
  let li=0, ci=0;
  const typingSpeed = 40, pauseBetween=800;
  const caret = document.createElement('span'); caret.className='caret';
  el.appendChild(caret);

  function typeLoop(){
    if(li>=lines.length) return;
    const line = lines[li];
    if(ci<line.length){
      caret.insertAdjacentText('beforebegin', line[ci]);
      ci++;
      setTimeout(typeLoop, typingSpeed + Math.random()*30);
    } else {
      el.insertAdjacentHTML('beforeend','<br>');
      li++; ci=0;
      setTimeout(typeLoop, pauseBetween);
    }
  }
  setTimeout(typeLoop,700);
})();

/* === overlay === */
(function overlayInit(){
  const overlay = document.getElementById('overlay');
  const close = document.getElementById('closeOverlay');
  if(!overlay || !close) return;
  overlay.classList.remove('hidden');
  close.addEventListener('click', ()=> overlay.classList.add('hidden'));
})();

