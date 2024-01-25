const title = document.getElementById("i1");
const descr = document.getElementById("i2");
const bt = document.getElementById("b1");
const container = document.querySelector(".container");

const div = document.createElement("div");
div.setAttribute("class", "tasks")
container.append(div);


const arr = [];

const addtask = () => {


    arr.push({
        title: title.value,
        description: descr.value,
    })
    removeAllTasks();
    displayTask();
}

const displayTask = () => {
    const div = document.createElement("div");
    div.setAttribute("class", "tasks")
    container.append(div);

    arr.forEach((value, index) => {
        const innerdiv = document.createElement("div");
        innerdiv.setAttribute("class", "data");
        div.append(innerdiv);

        const pa = document.createElement("p");
        pa.setAttribute("id", "p1");

        pa.innerText = value.title;
        innerdiv.append(pa);

        const p2 = document.createElement("p");
        p2.setAttribute("id", "p2");
        p2.innerText = descr.value;
        innerdiv.append(p2);

        const b = document.createElement("button");
        b.setAttribute("id", "b2");
        b.innerText = "X";
        b.addEventListener("click",()=>{
            arr.splice(index,1);
            removeAllTasks();
            displayTask();
        })
        div.append(b);
        
    })

}

const removeAllTasks = () => {
    const tasksDiv = document.querySelector(".tasks");
    tasksDiv.remove();

}

// const addtask = () => {

//     const innerdiv = document.createElement("div");
//     innerdiv.setAttribute("class", "data");
//     div.append(innerdiv);

//     arr.push(innerdiv);

//     const pa = document.createElement("p");
//     pa.setAttribute("id", "p1");

//     pa.innerText = title.value;
//     innerdiv.append(pa);

//     const p2 = document.createElement("p");
//     p2.setAttribute("id", "p2");
//     p2.innerText = descr.value;
//     innerdiv.append(p2);

//     const b = document.createElement("button");
//     b.setAttribute("id", "b2");
//     b.innerText = "X";
//     div.append(b);
//     b.addEventListener("click",()=>{
//         arr.splice()
//     })

//     console.log(arr.);
// }

