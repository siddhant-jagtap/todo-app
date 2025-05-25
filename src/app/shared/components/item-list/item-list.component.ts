import {Component, EventEmitter, OnChanges, OnInit} from '@angular/core';
import {Input, Output } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    FormsModule
  ],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent implements OnChanges , OnInit{
  @Input() item: any;
  ItemList: string[] = [];
  @Output() editBtn = new EventEmitter<any>;


  ngOnInit() {
    const itemData = localStorage.getItem("item");
    this.ItemList = itemData ? JSON.parse(itemData) : [];
  }


  ngOnChanges() {
    if (this.item && !this.ItemList.includes(this.item) ) {
      this.ItemList.push(this.item);
        localStorage.setItem("item", JSON.stringify(this.ItemList));
    }
  }

  onDelete(e: any){
   this.ItemList = this.ItemList.filter(item => {
      return e !== item;
    })
    localStorage.setItem("item", JSON.stringify(this.ItemList));
  }

  onEdit(e: any){
     debugger;
     this.editBtn.emit(e);
  }

  protected readonly localStorage = localStorage;
  protected readonly JSON = JSON;
}
