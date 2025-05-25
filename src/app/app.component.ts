import {Component} from '@angular/core';
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
  public task: string = "";
  isVisiblePopup: boolean = false;
  isEditMode: boolean = false;
  private originalItem: string = ""; // store original to find and replace in list


  onEditPopup(item: string) {
    this.task = item;
    this.originalItem = item;
    this.isEditMode = true;
    this.isVisiblePopup = true;
  }

  handleCreateBtn(e: boolean) {
    this.task = "";
    this.originalItem = "";
    this.isEditMode = false;
    this.isVisiblePopup = e;
  }

  handleSubmit(updatedTask: string) {
    let itemList = JSON.parse(localStorage.getItem("item") || "[]");

    if (this.isEditMode) {
      // update
      const index = itemList.indexOf(this.originalItem);
      if (index !== -1 && updatedTask.trim()) {
        itemList[index] = updatedTask.trim();
      } else {
        // add new
        if (!itemList.includes(updatedTask)) {
          itemList.push(updatedTask);
        }
      }

      localStorage.setItem("item", JSON.stringify(itemList));

      this.task = updatedTask;
      this.isVisiblePopup = false;
    }

  }
}
