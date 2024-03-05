const hrMenu = document.getElementById('hr')
const minMenu = document.getElementById('min')
const secMenu = document.getElementById('sec')
let currentTime = document.getElementById('time')
let setAlarm = document.querySelectorAll('.button')

// For hour select field 

for(let i = 24; i > 0; i--){
    i = i < 10 ? '0' + i : i

    let option = `<option value="${i}">${i}</option>`

    hrMenu.firstElementChild.insertAdjacentHTML('afterend', option);
}


// For minute select field

for(let i = 59; i >= 0; i--){
    i = i < 10 ? '0' + i : i

    let option = `<option value="${i}">${i}</option>`

    minMenu.firstElementChild.insertAdjacentHTML('afterend', option);
}

// For am/pm selection field

for(let i = 2; i > 0; i--){
    let ampm = i == 1 ? 'AM' : 'PM'

    let option = `<option value="${ampm}">${ampm}</option>`

    secMenu.firstElementChild.insertAdjacentHTML('afterend', option);
}

setInterval(() => {
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = 'PM';

    if(h >= 24){
        h = h - 24
        ampm = 'AM';
    }

    // if hour value is 0, then set value to 12

    h = h == 24 ? h = 0 : h;

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    currentTime.innerText = `${h}:${m}:${s} ${ampm}`;

}, 1000);


setAlarm.addEventListener('click', () => {
    let setTime = `${hrMenu.value}:${minMenu.value}:${secMenu.value} ${ampm}`

    console.log(setTime)
});
