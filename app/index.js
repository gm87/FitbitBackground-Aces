import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";

// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
const myLabel = document.getElementById("myLabel");
const myDate = document.getElementById("myDate");
const myDateBorder = document.getElementById("myDateBorder");
const myLabelBorder = document.getElementById("myLabelBorder");

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  let month = today.getMonth();
  let day = today.getDate();
  if (today.getDay() == 0)
    let weekday = "Sun";
  if (today.getDay() == 1)
    let weekday = "Mon";
  if (today.getDay() == 2)
    let weekday = "Tue";
  if (today.getDay() == 3)
    let weekday = "Wed";
  if (today.getDay() == 4)
    let weekday = "Thu";
  if (today.getDay() == 5)
    let weekday = "Fri";
  if (today.getDay() == 6)
    let weekday = "Sat";
  let mins = util.zeroPad(today.getMinutes());
  myLabel.text = `${hours}:${mins}`;
  myDate.text = `${weekday}, ${month}/${day}`
}
