const DELAY = 1000;
const body = document.body;
let interval = null;

const refs = {
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]'),
}

refs.btnStart.addEventListener('click', onBtnStartClick);
refs.btnStop.addEventListener('click', onBtnStopClick);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onBtnStartClick(){
    refs.btnStart.classList.add('disabled', true);
    refs.btnStop.classList.remove('disabled');
    //console.log('Клік по кнопці Start');

    interval = setInterval(()=>{
       //console.log('timeOut');
       body.style.backgroundColor = getRandomHexColor();
    }, DELAY);
}

function onBtnStopClick(){
    refs.btnStart.classList.remove('disabled');
    refs.btnStop.classList.add('disabled', true);
    //console.log('Клік по кнопці Stop');
    clearInterval(interval);
}




