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