import { Injectable } from '@angular/core';
import { BTList, BTItem, BTTypeEnum } from './bug-tracker.model';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class BugTrackerService {
  btLists: Array<BTList>;

  constructor() { }

  addItemToList(listKey: string, item: BTItem) {

  }

  createDefaultItem(name: string = "New Item") {
    let def: BTItem  = {
      key: uuid(),
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
    let def: BTList = {
      key: uuid(),
      name: name, 
      items: [ this.createDefaultItem() ],
    }
    return def;
  }

  createNewList() {

  }


}
