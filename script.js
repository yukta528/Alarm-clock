//fetching and displaying current time
let time = document.querySelector('#currTime');
setInterval(function () {
    let date_str = new Date().toLocaleTimeString('en-US');
    if (date_str.length < 11) {
        date_str = "0" + date_str;
    }
    time.innerHTML = date_str;
}, 1000);


//adding event listener for Alarm set

let alarm_list = document.querySelector('#alarm_list');
document.querySelector('#submit_alarm').addEventListener('click', addAlarm);

//function to add alarm to list
function addAlarm() {

    //fetching input time values
    let hours = document.querySelector('#hh');
    let hours_val = hours.value;
    let mins = document.querySelector('#mm')
    let mins_val = mins.value;
    let seconds = document.querySelector('#ss')
    let sec_val = seconds.value;

    //conditions if input type does not match standard criteria
    if (hours_val == "" || mins_val == "" || sec_val == "") {
        alert("Please enter all values to set an alarm");
        return;
    }
    if (hours_val > 12 || hours_val < 0) {
        alert("Please enter a value between 0 and 12 to set an alarm");
        return;
    }
    if (mins_val > 59 || mins_val < 0) {
        alert("Please enter a value between 0 and 59 to set an alarm");
        return;
    }
    if (sec_val > 59 || sec_val < 0) {
        alert("Please enter a value between 0 and 59 to set an alarm");
        return;
    }

    let am_pm = document.querySelector('#ampm :checked').innerText;


    //adding new alarm list element to list
    let time_set = hours_val + ":" + mins_val + ":" + sec_val + " " + am_pm;
    const li = document.createElement('li');
    li.innerHTML = `
    <label >${time_set}</label>
    <button class="delete_alarm" type="submit">Delete</button>
    `;

    alarm_list.appendChild(li);

    //resetting the input boxes to no value
    hours.value = "";
    mins.value = "";
    seconds.value = "";

    //fetching new alarm list and adding event listener to delete alarm
    const list_all_alarms = [...document.querySelectorAll('#alarm_list li')];



    for (const i of list_all_alarms) {

        i.addEventListener('click', deleteAlarm);
    }
}




//handler function to delete alarm from list
function deleteAlarm(e) {
    if (e.target.className == 'delete_alarm') {
        this.parentNode.removeChild(this);
    }
}

//check if any alarm goes off at current time
setInterval(function () {
    const alarm_check = [...document.querySelectorAll('#alarm_list li label')];
    for (const j of alarm_check) {
        let alarm_str = new Date().toLocaleTimeString();
        if (alarm_str.length < 11) {
            alarm_str = "0" + alarm_str;
        }

        let time_check = alarm_str;
        if (j.innerText == time_check) {
            alert("You set an alarm! It's " + time_check);

        }
    }
}, 1000);
