import '../css/common.css';

// === Підключення бібліотеки flatpickr ===
// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
// === Підключення бібліотеки Notiflix ===
import Notiflix from 'notiflix';

//==============================================

const refs = {
    startBtn: document.querySelector('[data-start]'),
    clockDays: document.querySelector('[data-days]'),
    clockHours: document.querySelector('[data-hours]'),
    clockMinutes: document.querySelector('[data-minutes]'),
    clockSeconds: document.querySelector('[data-seconds]'),
}

class Timer{
    constructor({onTick}){
        this.intervalId = null;
        this.isActive = false;
        this.onTick = onTick;
    }

    start() {
        if(this.isActive){
            return;
        }
    
        const startTime = calendar.selectedDates[0];
        this.isActive = true;
    
        this.intervalId = setInterval(() => {
          const currentTime = Date.now();
          const deltaTime = startTime - currentTime;
          const time = convertMs(deltaTime);
          //const { days, hours, minutes, seconds } = convertMs(deltaTime);
          //console.log('start -> currentTime', currentTime);
    
          //upDateClockFace(time);

          this.onTick(time);
    
          //console.log(`${days}:${hours}:${minutes}:${seconds}`);
    
          //console.log(
          //`${pad(new Date(deltaTime).getUTCHours())}:${pad(new Date(deltaTime).getMinutes(),)}:${pad(new Date(deltaTime).getSeconds())}`,
          //);
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
    }

}

const timer = new Timer({
    onTick: upDateClockFace
});

//timer.start();

const options = {
  enableTime: true,               //Включает устройство выбора времени
  time_24hr: true,                //Отображает устройство выбора времени в 24-часовом режиме без выбора AM/PM, если включено.
  defaultDate: new Date(),        //Устанавливает первоначально выбранную дату (даты).
  minuteIncrement: 1,             //Регулирует шаг для минутного ввода (вкл. прокрутку)
  onClose(selectedDates) {          
    console.log(selectedDates[0]);

     if(new Date > selectedDates[0]){
        //window.alert("Please choose a date in the future");
        Notiflix.Notify.failure('Please choose a date in the future');
     }else{
        refs.startBtn.setAttribute('disable', true);
     };
  },
};

const calendar = flatpickr('#datetime-picker', options);

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = pad(Math.floor(ms / day));
    // Remaining hours
    const hours = pad(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = pad(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
}

//=======function pad(value)====
//Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков

function pad(value) {
  return String(value).padStart(2, '0');

  //1 -> 01
  //7 -> 07
  //12 -> 12
}

refs.startBtn.addEventListener('click', () => {
    if(true){
        timer.start();
    }else{
        timer.stop();
    }
});

//==========function upDateClockFace======================
//1. Принимает время в милисекундах
//2. Высчитывает сколько в этих милисекундах вмещается часов/минут/секунд
//3. Рисует интерфейс

function upDateClockFace({ days, hours, minutes, seconds }){
    refs.clockDays.textContent = `${days}`;
    refs.clockHours.textContent = `${hours}`;
    refs.clockMinutes.textContent = `${minutes}`;
    refs.clockSeconds.textContent = `${seconds}`;
}

//=======function getTimeComponents(time)==== *function convertMs(ms)*
//1. Принимает время в милисекундах
//2. Высчитывает сколько в этих милисекундах вмещается часов/минут/секунд
//3. Возвращает объект со свойствами - hours, mins, secs
//4. Адская копипаста со стек оверфлоу

//function getTimeComponents(time) {
  //const hours = pad(
    //Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  //);
  //const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  //const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  //return { hours, mins, secs };
//}





