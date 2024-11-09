import { Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';
import { Itickets } from '../../../shared/interface/shared.interface';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [MatTooltipModule, NgStyle],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
@Input() ticket: Itickets = {
  title: '', id: '', status: 'open',
  request: ''};
@Output() markComplete = new EventEmitter();
detailsVisible = signal(false);

onToggle():void {
  // this.detailsVisible.set(!this.detailsVisible());
  this.detailsVisible.update((wasVisible) => !wasVisible);
}
MarAsComplete(){
  this.markComplete.emit();
  this.onToggle();
}
}
