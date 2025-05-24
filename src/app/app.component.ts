import { Component } from '@angular/core';
import {ItemListComponent} from './shared/components/item-list/item-list.component';
import {CreateBtnComponent} from './shared/components/create-btn/create-btn.component';
import {HeaderComponent} from './shared/components/header/header.component';
import {DashboardCardsComponent} from './shared/components/dashboard-cards/dashboard-cards.component';
import {PopupTaskComponent} from './shared/components/popup-task/popup-task.component';
import {NgIf} from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ItemListComponent, CreateBtnComponent, HeaderComponent, DashboardCardsComponent, PopupTaskComponent, NgIf,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app';
  public task:string = "";
  isVisiblePopup:boolean = false;
  handleCreateBtn(e: boolean){
    this.isVisiblePopup = e;
  }
  handleSubmit(message: string){
    this.task = message;
  }

}
