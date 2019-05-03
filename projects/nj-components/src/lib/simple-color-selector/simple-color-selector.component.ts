import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nj-simple-color-selector',
  templateUrl: './simple-color-selector.component.html',
  styleUrls: ['./simple-color-selector.component.scss']
})
export class SimpleColorSelectorComponent implements OnInit {
  @Output() onColorChange: EventEmitter<string>; 
  savedColors: Array<String>;
  showColorSelector = false;
  curColor: string;
  red = "#ff0000";
  yellow = "#ffff00";
  green = "#00ff00";

  constructor() { 
    this.curColor = this.red;
    this.savedColors = [ this.red, this.yellow, this.green ]; 
    this.onColorChange = new EventEmitter<string>();
  }

  ngOnInit() {
    this.onColorChange.emit(this.red); // Init to red
  }

  addColor(toAdd: string) {
    if(toAdd[0] != "#") { toAdd = "#"+toAdd;}
    this.savedColors.push(toAdd);
  }

  emitColor(selColor: string) {
    this.showColorSelector = false;
    this.curColor = selColor;
    this.onColorChange.emit(selColor);
  }

}
