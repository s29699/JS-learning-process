const ip = document.getElementById("i1");
const pcontainer = document.querySelector(".posters");

const addf = () =>{
    console.log(ip.value);
    const temp = document.createElement("div");
    temp.setAttribute("class","poster");
    temp.innerText = `Hi, I am ${ip.value}` ;
    pcontainer.append(temp);
}