
let Tform;
let prog;
window.addEventListener('DOMContentLoaded', (event) => {
    Tform = new AddWindow();
    prog = new Renderer(null,"data.json");
    prog.importTickets();

    document.getElementById("addBTN").addEventListener('click', (event)=>{
        Tform.toggleWindow();
    })
    document.getElementById("closeBTN").addEventListener('click', (event)=>{
        Tform.toggleWindow();
    })
});

let checkNsend= (form) =>{
    form.preventDefault();  
    Tform.pushData(form);  
}
let removeMe = (id) => {
    if(confirm("are you sure?"))
        prog.removeTicket(id)
}

