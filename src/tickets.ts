
import AddWindow from "./AddWindow"
import Renderer from "./Renderer"

let Tform:AddWindow;
let prog:Renderer;
window.addEventListener('DOMContentLoaded', (event) => {
    Tform = new AddWindow();
    prog = new Renderer(null);
    prog.importTickets();
    let addBTN = document.getElementById("addBTN");
    if(addBTN){
        addBTN.addEventListener('click', (event)=>{
            Tform.toggleWindow();
        })
    }
    let closeBTN = document.getElementById("closeBTN");
    if(closeBTN){
        closeBTN.addEventListener('click', (event)=>{
        Tform.toggleWindow();
        })
    }
    let _Form = document.getElementById("_Form");
    if(_Form){
        _Form.addEventListener('submit', (event)=>{
            event.preventDefault();  
            Tform.pushData(prog);  
        })
    }
    
    
   


});
