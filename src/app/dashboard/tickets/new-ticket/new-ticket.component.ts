import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  onSubmit(input: HTMLInputElement){
    console.log(input.value);
  }

  //Template variables and refference's
  //One way..two way binding with [(ngModel)]
  //alternative way..store or reference in the template #variable

}
