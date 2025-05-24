import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-create-btn',
  standalone: true,
  imports: [],
  templateUrl: './create-btn.component.html',
  styleUrl: './create-btn.component.css'
})
export class CreateBtnComponent {
  @Output() clicked = new EventEmitter<boolean>();

  onAddItemBtnClick(){
    this.clicked.emit(true);
  }





}
