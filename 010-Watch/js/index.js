const dateField = document.querySelector(".date");
const timeField = document.querySelector(".time");
const spinner = document.querySelector(".spinner circle");

// Constants
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Set initial spinner position
const delay = new Date().getSeconds();
spinner.style.animationDelay = `-${delay}s`;

// Add leading zero to numbers less than 10
const zeroPadding = (num) => {
  return num < 10 ? `0${num}` : num;
};

// Update time and date
const updateClock = () => {
  const currDate = new Date();
  const hours = currDate.getHours();
  const minutes = currDate.getMinutes();

  const day = days[currDate.getDay()];
  const date = currDate.getDate();
  const month = months[currDate.getMonth()];
  const year = currDate.getFullYear();

  dateField.textContent = `${day}, ${zeroPadding(date)} ${month} ${year}`;
  timeField.textContent = `${zeroPadding(hours)}:${zeroPadding(minutes)}`;
};

updateClock();
setInterval(updateClock, 1000);
