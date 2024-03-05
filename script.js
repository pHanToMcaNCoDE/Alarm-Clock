const select = document.querySelectorAll('select');
let currentTime = document.getElementById('time');
const setAlarm = document.querySelector('button');
const options = document.querySelector('.options');
const body = document.querySelector('body');
const title = document.getElementById('main-title')
const section = document.querySelector('.section')
const icon = document.querySelector('i')


let alarmTime;

// For hour select field. For loop to increment 


for (let i = 24; i > 0; i--) {
    i = i < 10 ? '0' + i : i

    let option = `<option value="${i}">${i}</option>`

    select[0].firstElementChild.insertAdjacentHTML('afterend', option);
}


// For minute select field. For loop to 

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? '0' + i : i

    let option = `<option value="${i}">${i}</option>`

    select[1].firstElementChild.insertAdjacentHTML('afterend', option);
}

// For am/pm selection field

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? 'AM' : 'PM'

    let option = `<option value="${ampm}">${ampm}</option>`

    select[2].firstElementChild.insertAdjacentHTML('afterend', option);
}

setInterval(() => {

    // Using the in-built Data Class 

    let date = new Date(),

        // gethour function for hours
        h = date.getHours(),

        // getMinutes function for minutes
        m = date.getMinutes(),

        // getSeconds function for seconds
        s = date.getSeconds(),

        // setting ampm variable to pm based on the current time (15:35 PM)
        ampm = 'PM';

    // If it is midnight, that is 24, then change ampm variable to AM

    if (h >= 24) {
        h = h - 24
        ampm = 'AM';
    }

    // if hour value is 24, then set value to 0

    h = h == 24 ? h = 0 : h;


    // Concatenante 0 to values less than 10

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;


    // Save the current hour, minute, and seconds to a variable

    currentTime.innerText = `${h}:${m}:${s} ${ampm}`;


    /********************************************************************
     Background Color Change
    *********************************************************************/

    if (h >= 6 && h < 12) {
        // body.classList.remove('bg-blue-500', 'bg-yellow-500', 'bg-gray-500');
        title.classList.add('text-black');
        section.classList.add('bg-gray-100');
        select.classList.add('bg-white');
        body.classList.add('bg-orange-300');
    } else if (h >= 12 && h < 18) {
        // body.classList.remove('bg-blue-500', 'bg-yellow-500', 'bg-gray-500');

        body.classList.add('bg-blue-500');
    } else {

        title.classList.add('text-white');
        body.classList.add('bg-neutral-800');
        section.classList.add('bg-gray-500');
        icon.classList.add('text-white');
    }

    // Trigger the alert when the alarm time has reached

    if (alarmTime == `${h}:${m} ${ampm}`) {

        alert('Wake Up! Wake Up! Wake Up!');


        // This will allow the user to remove the alert window
        alarmTime = null;
        setAlarm.removeAttribute('disabled'); // Remove the disabled attribute
        setAlarm.innerText = 'Set Alarm';
    }


}, 1000);


/***********************************************************************
 Alarm Functionalities
************************************************************************/

function setTheAlarm() {

    // Saving the user's selected time to a variable

    let setTime = `${select[0].value}:${select[1].value} ${select[2].value}`;

    // check if the user has set their alarm

    if (setTime.includes('Hours') || setTime.includes('Minutes') || setTime.includes('AM/PM')) {
        return alert('Please, set up your alarm');
    }

    // Setting the alarm time variable to the time selected by the users

    alarmTime = setTime;
    setAlarm.setAttribute('disabled', true); // Add the disabled attribute
    setAlarm.innerText = 'Alarm Set'
}

setAlarm.addEventListener('click', setTheAlarm);
