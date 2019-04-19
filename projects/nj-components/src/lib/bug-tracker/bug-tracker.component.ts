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
  showListMake; 
  

  constructor(private btService: BugTrackerService) { 
    this.btService.btLists = [ this.btService.createDefaultList("listy") ]
    this.btLists = this.btService.btLists
  } 

  ngOnInit() {
    this.btService.showListMake$.subscribe(x => {
      console.log('showlistmake', x)
      this.showListMake = x;
    })
    
  }

  drop(event: any) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
    } 
    else {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
    }
  }

  toggleNewListName() {
    this.btService.toggleNewListName()
  }

  // Input Box
  addItem(itemName: string, list: BTList) {
    this.btService.addItem(itemName, list)
  }

  addList(listName: string) {
    this.btService.addList(listName)
  }

  // Edit box
  itemEdited(item: BTItem) {

  }

  itemDeleted(item: BTItem) {
    this.btService.removeItem(item)
  }
}
