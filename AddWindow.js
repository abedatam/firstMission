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