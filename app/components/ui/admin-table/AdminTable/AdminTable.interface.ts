export interface ITableItem {
  _id: string;
  editUrl: string;
  items: string[];
}

export interface IAdminTableItem {
  tableItems: ITableItem;
  removeHandler: () => void;
}
