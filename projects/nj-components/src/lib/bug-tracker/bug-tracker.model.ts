export interface BTList {
  key: string,
  name: string,
  items: Array<BTItem>
}

export interface BTItem {
  key: string,
  parent: BTItem, 
  children: Array<BTItem>,
  colorBackground: string, // hex code
  colorText: string, // hex code
  text: string,
  type: BTTypeEnum
}

export enum BTTypeEnum {
  Bug,
  FeatureRequest
}