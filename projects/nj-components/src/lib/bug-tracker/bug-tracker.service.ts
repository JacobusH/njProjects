import { Injectable } from '@angular/core';
import { BTList, BTItem, BTTypeEnum } from './bug-tracker.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class BugTrackerService {
  btLists: Array<BTList>;
  btListIDs: Array<string>;
  bhSubShowListMake = new BehaviorSubject<boolean>(false);
  showListMake$ = this.bhSubShowListMake.asObservable();

  constructor() { 

  }

  // Default operations
  createDefaultItem(listKey: string, name: string = "New Item") {
    let def: BTItem  = {
      key: uuid(),
      listKey: listKey,
      parent: null,
      children: null,
      colorBackground: '#fff',
      colorText: '#000',
      text: name,
      type: BTTypeEnum.Bug
    };
    return def;
  }

  createDefaultList(name: string = "New List") {
    let listKey = uuid()
    let def: BTList = {
      key: listKey,
      name: name, 
      items: [ this.createDefaultItem(listKey) ],
    }
    return def;
  }

  // List operations
  addList(listName: string) {
    this.btLists.push(this.createDefaultList(listName))
  }
  
  // Item operations
  addItem(itemName: string, list: BTList) {
    list.items.push(this.createDefaultItem(list.key, itemName))
  }

  removeItem(item: BTItem) {
    this.btLists.forEach(list => {
      if(list.key == item.listKey) {
        for(let i = 0; i < list.items.length; i++) {
          if(item.key == list.items[i].key) {
            list.items.splice(i, i + 1) 
          }
        }
      }
    })
  }

  // View operations
  toggleNewListName() {
    this.bhSubShowListMake.next(!this.bhSubShowListMake.value);
  }

  // Get entire state of the bug tracker
  getBTState() {
    console.log(JSON.stringify(this.btLists))
  }


}
