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
  @Input() task: string = "";
  @Output() closePopup = new EventEmitter<boolean>;
  @Output() clicked = new EventEmitter<string>();
  onCancelBtn(){
    this.closePopup.emit(false);
  }

  onSubmitBtn() {
    if (this.task.trim()) {
      this.clicked.emit(this.task);
    }
    this.task = "";
  }
}
