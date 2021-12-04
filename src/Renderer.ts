import {Ttype} from "./TicketType"
import Ticket from "./Ticket";
class Renderer{
    Tickets:Array<Ttype>|null;

    constructor(arr:Array<Ttype>|null){
        this.Tickets = arr;
    }
    importTickets(){
            let storage = localStorage.getItem("Tickets");
            if(storage)
                this.Tickets = JSON.parse(storage);
            if(this.Tickets)
                this.render();
        
    }
    exportTickets(){
        console.log(JSON.stringify(this.Tickets));
        localStorage.setItem("Tickets",JSON.stringify(this.Tickets));
        
        
    }
    removeTicket(id:string){
        console.log(0);
        if(!this.Tickets)
            return;
        let _Tickets = this.Tickets;
        _Tickets.forEach((element:Ttype,index) => {
            if(element.id === id){
                _Tickets.splice(index, 1);
            } 
        })
        console.log(this.Tickets);
        this.exportTickets();
        this.render();
    }
    addTicket(id:string, title:string, content:string){
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
        let DOMpointer:HTMLInputElement = <HTMLInputElement>document.getElementById("main");//get the pointer to the main id which we want to put the tickets there.
        if(DOMpointer){
            DOMpointer.innerHTML = "";// initialize the content of the "main" element.
            if(!this.Tickets)
                return;
            let _Tickets = this.Tickets;
            _Tickets.forEach((element:any) => {
                DOMpointer.innerHTML += new Ticket({"id" : element.id, "title":element.title, "content":element.content}).getDOM();  
            });
       }
    }

}
export default Renderer;