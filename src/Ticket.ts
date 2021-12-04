import {Ttype} from "./TicketType"
class Ticket{

    ticket:Ttype;

    constructor(ticket:Ttype){
     this.ticket = ticket;
    }

    getDOM(){
        let ticket = this.ticket;
        let _out = "<div class=\"_ticket box\">"
        _out +=         "<div class=\"_header\">"
        _out +=             "<div class=\"_title\">"+ticket.title+"</div>"
        _out +=             "<div class=\"_remove\"><button class=\"removeBTN\" id=\""+ticket.id+"\" type=\"button\"> X </button></div>"
        _out +=         "</div>"
        _out +=         "<div class=\"_content\">"+ticket.content+"</div>"
        _out +=     "</div>"
        
        return _out;
    }
}
export default Ticket;

