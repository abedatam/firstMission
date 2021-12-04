
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
    let _Remove = document.getElementsByClassName("removeBTN");
    if(_Remove){
        for(let i = 0; i < _Remove.length; i++){
            _Remove[i].addEventListener('click', (event:any)=>{
                let id = event.target.attributes.id.nodeValue;
                RemoveMe(id);
            },false);
        }
       
    }


});


let RemoveMe = (id:string) =>{
    if(confirm("are you sure?"))
        prog.removeTicket(id);
}