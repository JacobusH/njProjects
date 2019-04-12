import { Component, OnInit } from '@angular/core';
import { BTList, BTItem, BTTypeEnum } from './bug-tracker.model';
import { BugTrackerService } from './bug-tracker.service';
import { moveItemInArray, transferArrayItem, CdkDragDrop } from '@angular/cdk/drag-drop';
import { v4 as uuid } from 'uuid';

import { slideInOut } from '../animations/slideInOut.animation'; 

@Component({
  selector: 'nj-bug-tracker',
  templateUrl: './bug-tracker.component.html',
  styleUrls: ['./bug-tracker.component.scss'],
  animations: [ slideInOut ]
}) 
export class BugTrackerComponent implements OnInit {
  btLists: Array<BTList>;
  btListIDs: Array<string>;
  isLabelActive: boolean; 
  showListMake: boolean;

  constructor(private btService: BugTrackerService) { 
    this.isLabelActive = false;
    this.showListMake = false;
    this.btListIDs = ['cdk-drop-list-1', 'cdk-drop-list-1']
    this.btLists = [
      {
        key: uuid(),
        name: 'listy',
        items: [ this.btService.createDefaultItem() ]
      } 
    ];
  }

  ngOnInit() {
    
  }

  // CdkDragDrop<string[]> 
  drop(event: any) {
    console.log('trans', event)
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
    } 
    else {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
    }
  }

  toggleList() {
    this.showListMake = !this.showListMake
  }

  // Input Box
  addItem(itemName: string, list: BTList) {
    let tmp: BTItem = this.btService.createDefaultItem(itemName)
    list.items.push(tmp)
  }

  addList(listName: string) {
    let tmp = this.btService.createDefaultList(listName)
    this.btLists.push(tmp)
  }
}
