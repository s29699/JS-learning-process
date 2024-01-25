const targetDate = document.querySelector("input");
const btn = document.querySelector("button");
const target = document.querySelector(".target");
const heading = document.querySelector("h2");
const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");



const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;

const today = new Date();
const dd = String(today.getDate()).padStart(2, "0");
const month = String(today.getMonth() + 1).padStart(2, "0");
const year = String(today.getFullYear());
const CurrentDate = `${year}-${month}-${dd}`;

console.log(typeof(CurrentDate));
console.log(typeof(targetDate.value));

btn.addEventListener("click", () => {
    //This one also work
    // if (new Date(targetDate.value).getTime() < new Date(CurrentDate).getTime()){
    //     heading.innerText = "Timer Date is Passed";
    // };
    if(targetDate.value < CurrentDate){
        heading.innerText = "Passed";
    }
    if (targetDate.value === CurrentDate) {
        target.style.display = "none";
        heading.innerText = "Target Date is Now";
    }
    if (targetDate.value > CurrentDate) {
        const intervalId = setInterval(() => {
            // String can be compared  but can't be subtracted. So, we get the time in millisecond to find difference by subtracting.
            const tt = new Date(targetDate.value).getTime();
            const ct =  new Date().getTime();
            const difference = tt - ct;
            //console.log(tt);

            const leftDay = Math.floor(difference / day);
            const leftHour = Math.floor((difference % day) / hour);
            const leftMinute = Math.floor((difference % hour) / minute);
            const leftSecond = Math.floor((difference % minute) / second);

            daysElement.innerText = leftDay;
            hoursElement.innerText = leftHour;
            minutesElement.innerText = leftMinute;
            secondsElement.innerText = leftSecond;

            // isko check karna hai raat me 12 baje se thodi der phele target date next day set karke
            if (difference < 0) {
                target.style.display = "none";
                heading.innerText = "Timer Date is Passed";
                clearInterval(intervalId);
            }
        }, 0)
    }
})