const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const formAlarm = document.getElementById('form-alarm');

formatNumber ();

document.addEventListener('DOMContentLoaded',() =>{

    if(localStorage.getItem('alarmita'))

    getCurrentTime();
});


setInterval(() =>{
    getCurrentTime();
},1000);

formAlarm.addEventListener('submit',(e) =>{
    e.preventDefault();
    
    const formData = new formData( e.currentTarget);
    const value = formData.get('time');
    

    if( value === null || value === "" ){
        alert("Establesca una fecha no seas pendeja");
        return;
    }

    const currentDate = new Date();
    const setAlarm = new Data(value);
    
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDay();
    const currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();


    const alarmYear = setAlarm.getFullYear();
    const alarmMonth = setAlarm.getMonth();
    const alarmDay = setAlarm.getDay();
    const alarmHours = setAlarm.getHours();
    const alarmMinutes = setAlarm.getMinutes();

    const añoAlarmEsMenor = alarmYear < currentYear;
    const añoAlarmIgual = alarmYear === currentyear;
    const mesAlarmEsMenor = alarmMonth < currentMonth;
    const mesAlarmEsIgual = alarmMonth  === currentMonth;

    //const alertYear = setAlarm.getFullYear();
    
    if(añoAlarmEsMenor || 
        añoAlarmIgual && mesAlarmEsMenor ||
        añoAlarmIgual && mesAlarmEsMenor  && 
        ){

    }

});

function getCurrentTime(){
    const currentDate = new Date();
    const currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const currentSeconds = currentDate.getSeconds();

    hours.innerText = formatNumber(currentHours);
    minutes.innerText = formatNumber(currentMinutes);
    seconds.innerText = formatNumber(currentSeconds);
}



function formatNumber (value) {

    if(value <10){
        return "0" + value;
    }
    return value
}
