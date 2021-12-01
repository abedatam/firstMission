
class Ticket{
    constructor(id, title, content){
        this.id = id;
        this.title = title;
        this.content = content;
    }
    getDOM(){
        let _out = "<div class=\"_ticket box\">"
        _out +=         "<div class=\"_header\">"
        _out +=             "<div class=\"_title\">"+this.title+"</div>"
        _out +=             "<div class=\"_remove\"><button onclick=\"removeMe("+this.id+")\" type=\"button\"> X </button></div>"
        _out +=         "</div>"
        _out +=         "<div class=\"_content\">"+this.content+"</div>"
        _out +=     "</div>"
        
        return _out;
    }
}
class Renderer{
    constructor(arr, path){
        this.Tickets = arr;
        this.dataPath = path;
    }
    importTickets(){
        
            this.Tickets = JSON.parse(localStorage.getItem("Tickets"));
            if(this.Tickets)
                this.render();
        
    }
    exportTickets(){
        console.log(JSON.stringify(this.Tickets));
        localStorage.setItem("Tickets",JSON.stringify(this.Tickets));
        
        
    }
    removeTicket(id){
        this.Tickets.forEach((element,index) => {
            if(element.id == id){
                console.log(index);
                this.Tickets.splice(index, 1);
            } 
        })
        this.exportTickets();
        this.render();
    }
    addTicket(id, title, content){
        if(!this.Tickets)
            this.Tickets = new Array();
        this.Tickets.push({
            "id":id,
            "title":title,
            "content":content
        });
        this.exportTickets();
        this.render();
    }
    render(){
        let DOMpointer = document.getElementById("main");//get the pointer to the main id which we want to put the tickets there.
        DOMpointer.innerHTML = "";// initialize the content of the "main" element.
        this.Tickets.forEach(element => {
            DOMpointer.innerHTML += new Ticket(element.id, element.title, element.content).getDOM();   
        });
    }

}

class AddWindow{
    constructor(){
        this.title = "";
        this.content = "";
        this.formPointer = document.getElementById("addForm");
        this.blockerPointer = document.getElementById("blocker");
        this.bodyPointer = document.getElementsByTagName("body")[0];
    }
    toggleWindow(){
        this.formPointer.toggleAttribute("opened");
        this.blockerPointer.toggleAttribute("opened");
        this.bodyPointer.toggleAttribute("locked");
    }
    pushData(event){
        this.title = document.getElementById("title_inp").value;
        this.content = document.getElementById("content_inp").value;
        let id = Date.now();
        prog.addTicket(id,this.title, this.content);
        
    }
}
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

