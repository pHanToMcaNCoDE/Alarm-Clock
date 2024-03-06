/************* Variables ******************/

const select = document.querySelectorAll('select');
let currentTime = document.getElementById('time');
const setAlarm = document.querySelector('button');
const options = document.querySelector('.options');
const body = document.querySelector('body');
const title = document.getElementById('main-title');
const section = document.querySelector('.section');
const icon = document.querySelector('i');
const alarmList = document.getElementById('alarmList');

/*************************************************************************** 
 Alarm Array For Alarm List
***************************************************************************/

let alarms = [];




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

    let date = new Date();

    // gethour function for hours

    let h = date.getHours();
    
    // getMinutes function for minutes
    
    let m = date.getMinutes();

    
    // getSeconds function for seconds
    
    let s = date.getSeconds();

    
    // If the hour, h is 12, then ampm will be pm (meaning it's noon)
    
    let ampm = h >= 12  ? 'PM' : 'AM';


    // if hour value is 24, then set value to 0 (then, it is midnight)

    h = h == 24 ? h = 0 : h;


    // Concatenante 0 to values less than 10

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;


    // Save the current hour, minute, and seconds to a variable

    currentTime.innerText = `${h}:${m}:${s} ${ampm}`;


    /******************************************************************* 
    Trigger the alert when the alarm time has reached
    *******************************************************************/

    if (alarmTime && alarmTime == `${h}:${m} ${ampm}`) {
        console.log('Alert!')
        alert('Wake Up! Wake Up! Wake Up!');


        // This will allow the user to remove the alert window
        alarmTime = null;
        setAlarm.classList.remove('disable');
        setAlarm.innerText = 'Set Alarm';
    }

    /********************************************************************
     Background Color Change
    *********************************************************************/

    if (h >= 6 && h < 12) {
        title.classList.add('text-black');
        body.classList.add('bg-orange-300');
    } else if (h >= 12 && h < 18) {
        title.classList.add('text-black');
        body.classList.add('bg-blue-500');
    } else {

        title.classList.add('text-white');
        body.classList.add('bg-neutral-800');
        icon.classList.add('text-white');
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

        /***********************************************************************************
        Pushing the list to the array based on the time selected by users
        ***********************************************************************************/

        alarms.push(alarmTime);
        alarmList.innerHTML = '';

        alarms.forEach(alarm => {

            let list = `<li 
                    class='list-none border mx-1 my-1 border-black p-1 font-mono tracking-widest text-[1rem] flex justify-between w-full items-center bg-white'>
                        <p>${alarm}</p>
                        <button id="setAlarm"
                                class="my-3 bg-blue-400 text-white text-[1rem] font-mono tracking-widest px-2 py-3 rounded-lg w-[40%] outline-0"
                        >
                            Set Alarm
                        </button>
                    </li>`;
            alarmList.insertAdjacentHTML('beforeend', list)
        });

        // Disable the Set alarm button when the user clicks on it

        setAlarm.classList.add('disable');
        setAlarm.innerText = 'Alarm Set'
}

setAlarm.addEventListener('click', setTheAlarm);
