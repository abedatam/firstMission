
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

