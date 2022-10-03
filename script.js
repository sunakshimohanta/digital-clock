function displayClock() {
    const today = new Date();

    const day = getDayByIndex(today.getDay());
    const month = getMonthByIndex(today.getMonth());
    const year = today.getFullYear();
    const date = addDateSuffix(today.getDate());

    //const dateDisplay = document.getElementById('date-display');
    //dateDisplay.textContent = `${day}, ${month}, ${year}, ${date}`;
   console.log(day, month, year, date);
    
  const dateDisplay = document.getElementById('date-display');
  dateDisplay.textContent = `${day}, ${month} ${date} ${year}`;


    let militaryHours = addLeadingZeroes(today.getHours());
    let standardHours = getStandardHours(militaryHours);
    let minutes = addLeadingZeroes(today.getMinutes());
    let seconds = addLeadingZeroes(today.getSeconds());
    
    if(militaryHours >= 18 || militaryHours <= 5){
         document.body.style.backgroundImage = "url('images/nightmode.jpg')";
    }else {
        document.body.style.backgroundImage= "url('images/daymode.jpg')";        
    }

    const timeDisplay = document.getElementById('time-display');
    timeDisplay.textContent = `${standardHours}:${minutes}:${seconds} ${militaryHours>12 ? 'PM' : 'AM'}`;
}

function addLeadingZeroes(time){
  if(time<10){
     return "0" + time;
  }else {
    return time;
  }
}

function getStandardHours(time) {
    if(time>12){
        return time - 12;
    } else if (time===0){
        return 12
    }else {
        return time;
    }
}

function getDayByIndex(index) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[index];
};

function getMonthByIndex(index) {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July", 
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    return months[index];
};

function addDateSuffix(date) {
  if(date===1 || date === 21 || date === 31){
     return date + "st";
  }else if (date === 2 || date === 22){
    return date + "nd";
  }else if(date === 3 || date === 23) {
    return date + "rd";
  }else {
    return date + "th";
  }
}

setInterval(displayClock,1000);
displayClock();