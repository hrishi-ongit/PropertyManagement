import { Component } from '@angular/core';
import { ButtonComponent } from "../../shared/button/button.component";
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { TicketComponent } from "./ticket/ticket.component";
import { Itickets } from '../../shared/interface/shared.interface';
import { TICKETS } from '../../shared/tickets.model';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [ButtonComponent, NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: Itickets[] = TICKETS;
  addNewticket(ticket:Itickets){
    this.tickets.push(ticket);
  }

  onClose(id: string){
    this.tickets = this.tickets.map((ticket) => {
      if(ticket.id === id){
        return {...ticket, status : 'close'}
      }
      return ticket;
    })
    // this.tickets = this.tickets.map((ticket) => {
    //   if(ticket.id === id){
    //     ticket.status = 'close'
    //     return ticket
    //   }
    //   return ticket;
    // })
  }
}
