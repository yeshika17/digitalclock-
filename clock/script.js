function clock() {
    var hours = document.getElementById('hours');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');
    var period = document.getElementById('period');
  
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    var ampm = h >= 12 ? "PM" : "AM";
  
    h = h % 12 || 12;
  
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
  
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    period.innerHTML = ampm;
  }
  
  setInterval(clock, 1000);
  
  // Initial call
  clock();
  