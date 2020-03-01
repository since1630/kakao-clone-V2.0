const COLUNM = document.querySelector(".status-bar__column");
const CLOCK = COLUNM.querySelector(".status-bar__clock");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minute = date.getMinutes();
  CLOCK.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${
    minute < 10 ? `0${minute}` : minute
  }`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
