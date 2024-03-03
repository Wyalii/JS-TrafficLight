let button = document.getElementById("next")  
let light = "yellow"

button.addEventListener("click", () =>{ 
    if(light == "yellow"){ 
        document.querySelector(".prepare").style.backgroundColor = "grey";
        document.querySelector(".go").style.backgroundColor = "green" 
        light = "green" 
        return;
    } 

    if(light == "green"){ 
        document.querySelector(".go").style.backgroundColor = "gray" 
        document.querySelector(".stop").style.backgroundColor = "red" 
        light ="red" 
        return;
    } 

    if(light == "red"){ 
        document.querySelector(".stop").style.backgroundColor = "gray" 
        document.querySelector(".prepare").style.backgroundColor = "yellow" 
        light = "yellow" 
        
    }
})