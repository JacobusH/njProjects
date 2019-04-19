import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BTList, BTItem, BTTypeEnum } from '../bug-tracker/bug-tracker.model';

@Component({
  selector: 'nj-input-edit',
  templateUrl: './input-edit.component.html',
  styleUrls: ['./input-edit.component.scss']
})
export class InputEditComponent implements OnInit {
  @Input('item') item: BTItem;
  @Output('change') emitItem: EventEmitter<BTItem>;
  @Output('delete') emitDelete: EventEmitter<BTItem>;
  isFocused: boolean;

  constructor() { 
    this.emitItem = new EventEmitter<BTItem>()
    this.emitDelete = new EventEmitter<BTItem>()
    this.isFocused = false
  }

  ngOnInit() {

  }


  onTextChange(ev: any) {
    this.item.text = ev.target.value
    this.emitItem.emit(this.item)
  }

  onDelete() {
    this.emitDelete.emit(this.item)
  }



}
