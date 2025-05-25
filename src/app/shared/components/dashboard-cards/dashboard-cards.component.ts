import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-dashboard-cards',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './dashboard-cards.component.html',
  styleUrl: './dashboard-cards.component.css'
})
export class DashboardCardsComponent {

  Items : string[] = ["Today", "Overdue", "Tommorow", "Yesterday"];
}
