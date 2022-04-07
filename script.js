let times = document.getElementById("times");

const showTime = () => {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  times.innerHTML = h + ":" + m + ":" + s;
};
setInterval(showTime, 1000);
