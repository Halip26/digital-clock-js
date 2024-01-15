// disini kita akan buat fungsi showTime()
function showTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  // pada malam hari 12:00:01 AM
  // pada siang hari 12:00:01 PM
  let session = "AM";

  // jika hours sama dgn 0 maka 12
  if (hours == 0) {
    hours = 12;
  }

  // jika sudah melewati siang hari 12:00:01 PM
  if (hours > 12) {
    hours = hours - 12;
    session = "PM";
  }

  // ternery operators
  //  variabelName = (conditional) ? TRUE value : FALSE value
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let time = hours + ":" + minutes + ":" + seconds + " " + session;
  // iniliah DOM (Document Object Model)
  document.getElementById("MyClockDisplay").innerText = time;

  // ini untuk 1 ke 1000 milidetik
  setTimeout(showTime, 1000);
}

showTime();
