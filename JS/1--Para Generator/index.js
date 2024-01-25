const plen = document.getElementById("i1");
const body = document.querySelector(".container");
const letter = "abcdef";

let nplen;
const getdata = ()=>{
    nplen = Number(plen.value);
    let text = "";
    while(nplen!=0 ){
        text += generatewords();
        text += " ";
        nplen--;
    }
    text+='.';
    const para = document.createElement("p");
    para.innerText=text;
    body.append(para);
    // document.getElementById("p1").innerHTML=text;
};

const generatewords = () =>{
    let word="";
    for(let i=0;i<5;i++){
        let j=(Math.random()*5).toFixed(0);
        word+=letter[j];
    }
    return word;
};
