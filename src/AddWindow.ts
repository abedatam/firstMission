import Renderer from "./Renderer";
class AddWindow{
    title:string;
    content:string;
    formPointer:any;
    blockerPointer:any;
    bodyPointer:any;
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
    pushData(prog:Renderer){
        let title_inp = <HTMLInputElement>document.getElementById("title_inp");
        let content_inp = <HTMLInputElement>document.getElementById("content_inp")
        if(title_inp !== null && content_inp !== null) {
            this.title = title_inp.value;
            this.content = content_inp.value;
            let id =  Date.now().toString();
            prog.addTicket(id,this.title, this.content);   
        }
    }
}
export default AddWindow;