function setTime() {
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    document.getElementById('nowDataTimeSpan').innerHTML = "现在是北京时间: " + h + "时" + m + "分" + s + "秒";
    setInterval(() => setTime(),1000);
  }