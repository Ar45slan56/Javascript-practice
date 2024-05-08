let modebtn = document.querySelector("#node");
let currmode = "light";


modebtn.addEventListener("click", ()=>{
    if(currmode == "light"){
        currmode = "dark"
        modebtn.style.color = "red";
        // modebtn.style.backgroundcolor = "blue";
        document.querySelector("body").style.backgroundColor = "black";
    }
    else{
        currmode = "light";
        modebtn.style.color = "green";

        // modebtn.style.backgroundcolor = "red";
        
        document.querySelector("body").style.backgroundColor = "yellow";
    }

    alert("current mode is: ",currmode);
    console.log("curr mode is :",currmode);
})

