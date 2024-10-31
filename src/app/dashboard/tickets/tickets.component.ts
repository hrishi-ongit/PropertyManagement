import { Component } from '@angular/core';
import { ButtonComponent } from "../../shared/button/button.component";
import { NewTicketComponent } from "./new-ticket/new-ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [ButtonComponent, NewTicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {

}
