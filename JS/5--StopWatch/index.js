const btn = document.querySelector("button");
const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;


let btnValue = true;
let intervalId;
btn.addEventListener("click", () => {



    if (btnValue) {
        btn.innerText = "STOP";
        btnValue = false;



        let s = 0,
            m = 0,
            h = 0;
        //yaha pe har baar nayi intervalId assign hogi stop utton click karne ke baad
        intervalId = setInterval(() => {
            if (s === 59) {
                if (m === 59) {
                    h += 1;
                    m = 0;
                }
                else {
                    m += 1;
                }
                s = 0;
            }
            else {
                s += 1;
            }
            hourElement.innerText = `${String(h).padStart(2,"0")}`;
            minuteElement.innerText = `${String(m).padStart(2,"0")}`;
            secondElement.innerText = `${String(s).padStart(2,"0")}`;
        }, 1000);


    }
    else {
        btn.innerText = "START";
        btnValue = true;
        //console.log(intervalId);
        clearInterval(intervalId);
        //console.log(intervalId);
        hourElement.innerText = "00";
        minuteElement.innerText = "00";
        secondElement.innerText = "00";
    }
})