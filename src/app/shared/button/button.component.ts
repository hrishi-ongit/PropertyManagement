import { Component, Input } from '@angular/core';

@Component({
  // selector: 'app-button',
  selector: 'button[appButton]', //button is the content being selected and appButton is the selector name
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() btnTitle!: string;
}
