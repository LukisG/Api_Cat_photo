'use strict'
let div = document.getElementById("response");
let button = document.getElementById("getimg");
let variable = 0;
button.addEventListener("click", getdata);
function getdata(){

const fetchdata = async () => {
    try{
        const animalphoto = await fetch('https://api.thecatapi.com/v1/images/search');
       
        const animalphotodata = await animalphoto.json();
        if(variable == 0){
            variable = 1;
            
                let imgcreate = document.createElement("img");
                imgcreate.setAttribute("id","img")
                imgcreate.src = animalphotodata[0].url;
                div.appendChild(imgcreate);
                
            }
         else{
            div.removeChild(img);
            
            let imgcreate = document.createElement("img");
                imgcreate.setAttribute("id","img")
                imgcreate.src = animalphotodata[0].url;
                div.appendChild(imgcreate);
         }       
        
    } catch(error){
        console.log(error);
    }

    

   
};
fetchdata();
}





