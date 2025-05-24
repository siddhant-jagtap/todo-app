import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-popup-task',
  standalone: true,
    imports: [
        FormsModule
    ],
  templateUrl: './popup-task.component.html',
  styleUrl: './popup-task.component.css'
})
export class PopupTaskComponent{
  task: string = "Take a Bath at 7:30 am";
  @Output()closePopup = new EventEmitter<boolean>;
  @Output() clicked = new EventEmitter<string>();
  onCancelBtn(){
    this.closePopup.emit(false);
  }

  onSubmitBtn() {
    this.clicked.emit(this.task);
    this.task = "";
  }
}
