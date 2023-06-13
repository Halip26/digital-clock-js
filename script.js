// disini kita kan buat fungsi showTime()
function showTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session = "AM";

  // disini ada if statement
  if (h == 0) {
    h = 12;
  }

  // ini untuk melewati jam 12 siang
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  //  variabelName = (conditional) ? TRUE value : FALSE value
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  let time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;

  // ini untuk 1 detik ke 1000 milidetik
  setTimeout(showTime, 1000);
}

showTime();
