import { Component, OnInit } from '@angular/core';
import data from '../../../assets/mock_data.json'
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';


interface DataItem {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  employed: boolean;
}

interface ColumnItem {
  name: string;
  sortOrder?: NzTableSortOrder;
  sortFn?: NzTableSortFn;
  listOfFilter?: NzTableFilterList;
  filterFn?: NzTableFilterFn;
  filterMultiple?: boolean;
  sortDirections?: NzTableSortOrder[];
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})





export class CustomersComponent implements OnInit {

 listData:any;
 listOfData:DataItem[];
 listOfColumns: ColumnItem[] = [
     {
       name: 'First Name',
       sortOrder: null,
       sortFn: (a: DataItem, b: DataItem) => a.first_name.localeCompare(b.first_name),
       filterMultiple: false,
     },
     {
       name: 'Last Name',
       sortOrder: null,
       sortFn: (a: DataItem, b: DataItem) => a.last_name.localeCompare(b.last_name),
       filterMultiple: true,
     },]



  constructor() { }

  ngOnInit(){
    this.listData=data;
    this.listOfData=data;
  }

}
