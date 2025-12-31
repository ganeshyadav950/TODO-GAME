// let input = document.querySelector("input")
// let btn = document.querySelector("button")
// let ul = document.querySelector("ul")

// btn.addEventListener("click", function(){
//     let item = document.createElement("li");
//     item.innerText = input.value;
//     ul.appendChild(item);

//     let delbtn = document.createElement("button");
//     delbtn.innerText="delete";
//     delbtn.classList.add("{delete");
//     item.appendChild(delbtn);
//     ul.appendChild(item);
//     input.value = "";
// });

// ul.addEventListener("click", function(event){
//     if(event.target.nodeName == "button");
//     let listItem = event.target.parentElement;
//     listItem.remove();
//     console.log("deleted");
// });

// let input  = document.querySelector("input");
// let btn  = document.querySelector("button");
// let ul = document.querySelector("ul");

// btn.addEventListener("click", function(){
//     let item = document.createElement("li");
//     item.innerText = input.value;
//     ul.appendChild(item);
//     input.value = "";
    
//     let delbtn = document.createElemen("button");
//     delbtn.innerText = "cut";
//     delbtn.classList.add("delete");
//     item.appendChild(delbtn);
//     ul.appendChild(item);
    
//     ul.addEventListener("click",function(event){
//         if(event.target.nodeName == "button");
//         let listItem = event.target.parentElement;
//         listItem.remove();
//     })
    
// })


let input = document.querySelector("input");
let btn   =  document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = input.value;
    ul.appendChild(item);
    input.value = "";

    let delbtn = document.createElement("button");
    delbtn.innerText = "cut";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    ul.appendChild(item);

    ul.addEventListener("click", function(event){
        if(event.target.nodeName == "button");
        let listItem = event.target.parentElement;
        listItem.remove();


    });

})