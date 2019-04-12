import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'nj-input-float',
  templateUrl: './input-float.component.html',
  styleUrls: ['./input-float.component.scss']
})
export class InputFloatComponent implements OnInit {
  @Input('label') label: string;
  @Output('save') eventSave: EventEmitter<string>;  
  isLabelActive = false;

  constructor() { 
    this.eventSave = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  // Label
  labelFocus() {
    this.isLabelActive = true;
  }

  labelBlur() {
    this.isLabelActive = false;
  }

  onSave(ev: any) {
    console.log(ev)
    this.eventSave.emit(ev.target.value); 
    ev.target.value = "";
    console.log(ev)
  }

}
