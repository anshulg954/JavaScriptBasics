function showTime() {
  // Get the current Date and Time in the desired format
  var current_date = new Date();
  var current_hour = current_date.getHours();
  var current_min = current_date.getMinutes();
  var current_sec = current_date.getSeconds();
  var interval = "AM";
  setInterval(() => {
    // Increment the seconds
    current_sec++;
    // If seconds are 60, increment the minutes and reset the seconds
    if (current_sec == 60) {
      current_sec = 0;
      current_min++;
      // If minutes are 60, increment the hours and reset the minutes
      if (current_min == 60) {
        current_min = 0;
        current_hour++;
        // If hours are 24, reset the hours to 0
        if (current_hour == 24) {
          current_hour = 0;
        }
      }
    }
    // If Current Seconds is less than 10, add a 0 in front of the seconds (i.e. 5:5:05)
    if (current_sec < 10) {
      current_sec = "0" + current_sec;
    }
    // If Current Minutes is less than 10, add a 0 in front of the minutes (i.e. 5:05:05)
    if (current_min < 10) {
      current_min = "0" + current_min;
    }
    // If Current Hours is greater than 12, set the AM/PM to PM and change from 24 hour to 12 hour format
    if (current_hour > 12) {
      current_hour -= 12;
      interval = "PM";
    }
    //  Get Current Time in the desired format
    var time =
      current_hour + ":" + current_min + ":" + current_sec + " " + interval;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;
  }, 1000);
}

showTime();
