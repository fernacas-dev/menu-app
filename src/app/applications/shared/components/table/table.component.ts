import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input('headTable') headTable: any[] = [];
  @Input('dataTable') dataTable: any[] = [];
  @Output() editItemId = new EventEmitter();
  @Output() deleteItemId = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  editItem(itemId: string){
    this.editItemId.emit(itemId);
  }

  deleteItem(itemId: string){
    this.deleteItemId.emit(itemId);
  }

}
