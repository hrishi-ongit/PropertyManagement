import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  @Input() image!: { src: string, alt: string };
  @Input() title!: string;

  // public image = input<{ src: string, alt: string }>()
  // public title = input<string>();
}
