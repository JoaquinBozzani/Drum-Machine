const pads = document.querySelectorAll('.pad');
const drumSelector1 = document.querySelector('button[data-drumset="1"]');
const drumSelector2 = document.querySelector('button[data-drumset="2"]');
const drumSelector3 = document.querySelector('button[data-drumset="3"]');


//to change sounds
function changeDrumKit(event) {
    const title = document.querySelector('.title');
    const padContainer = document.querySelector('.pads');
    const currentDrumKit = document.querySelectorAll('audio');
    const kitNumber = event.currentTarget.dataset.drumset;

    //changing src of samples depending on what button the user pressed
    currentDrumKit[0].src = `sounds/sounds-${kitNumber}/clap-${kitNumber}.wav`;
    currentDrumKit[1].src = `sounds/sounds-${kitNumber}/hihat-${kitNumber}.wav`;
    currentDrumKit[2].src = `sounds/sounds-${kitNumber}/kick-${kitNumber}.wav`;
    currentDrumKit[3].src = `sounds/sounds-${kitNumber}/openhat-${kitNumber}.wav`;
    currentDrumKit[4].src = `sounds/sounds-${kitNumber}/boom-${kitNumber}.wav`;
    currentDrumKit[5].src = `sounds/sounds-${kitNumber}/ride-${kitNumber}.wav`;
    currentDrumKit[6].src = `sounds/sounds-${kitNumber}/snare-${kitNumber}.wav`;
    currentDrumKit[7].src = `sounds/sounds-${kitNumber}/tom-${kitNumber}.wav`;
    currentDrumKit[8].src = `sounds/sounds-${kitNumber}/misc-${kitNumber}.wav`;

    //changing the title to show what drumkit the user is using
    title.innerText = `DRUMS-${kitNumber}`;
    //also changing title background
    title.dataset.background = kitNumber;
    //change color of pads to match background
    padContainer.dataset.color = kitNumber;
}

//to play sounds
function handleKeyDown(event) {
    const pad = document.querySelector(`.pad[data-pad="${event.keyCode}"]`);
    const audio = document.querySelector(`audio[data-pad="${event.keyCode}"]`);

    //playing audio
    if(!audio) return;
    audio.currentTime = 0; //rewind so it can play as fast as you press
    audio.play();
    //trigger css effects when playing
    pad.classList.add('playing');
}

//to remove styling from pads when not active
function removeTransition(event) {
    if(event.propertyName !== 'transform') return;
    event.target.classList.remove('playing');
}


//event listeners
pads.forEach(pad => pad.addEventListener('transitionend', removeTransition)); //when the .playing transition ends it removes the class
window.addEventListener('keydown', handleKeyDown); //to play sound when keys are pressed

//to select drumkits
drumSelector1.addEventListener('click', changeDrumKit);
drumSelector2.addEventListener('click', changeDrumKit);
drumSelector3.addEventListener('click', changeDrumKit);
