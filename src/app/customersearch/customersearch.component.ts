// import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';

// import { Component, OnInit, ViewChild, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';
// import { DataService } from '../data.service';
// import { HttpClient } from '@angular/common/http';
// @Component({
//   selector: 'app-customersearch',
//   templateUrl: './customersearch.component.html',
//   styleUrls: ['./customersearch.component.css']
// })
// export class CustomersearchComponent implements OnInit {

//   @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
//   @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
//   elements: any = [];
//   previous: any = [];
//   pageSize : any;
//   page=1;
//   collectionSize : any;
//   headElements = ['ID', 'FirstName', 'AccountNumber', 'AccountType'];
//   a: any;
//   constructor(private cdRef: ChangeDetectorRef,private data: DataService,private http: HttpClient) { }
//   ngOnInit() {
//     console.log('ele = ', this.elements)
//      this.data.getdata().subscribe( (d) => {
//       Object.keys(d).forEach((key) => {
//         var value = d[key];
//         console.log(value);
//         this.elements.push({Name : value.firstname,
//           AccountNumber : value.accountnumber,
//         AccountType : value.Savings
//       })
//     });
//     this.pageSize=2
//     this.collectionSize = this.elements.length
//       console.log('ele = ', this.elements)
//     });
// }
// }

import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

export interface UserData {
  name: string;
  accountnumber: string;
  contactnumber: string;
  accounttype: string;
}


/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
     selector: 'app-customersearch',
     templateUrl: './customersearch.component.html',
    styleUrls: ['./customersearch.component.css']
 })
export class CustomersearchComponent implements OnInit {
  displayedColumns: string[] = ['name', 'accountnumber', 'contactnumber', 'accounttype'];
  dataSource: MatTableDataSource<UserData>;
  elements : any = [];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private data: DataService,private http: HttpClient) {
    this.data.getdata().subscribe( (d) => {
      Object.keys(d).forEach((key) => {
      var value = d[key];
      console.log(value);
      this.elements.push({Name : value.firstname,
        AccountNumber : value.accountnumber,
      AccountType : value.Savings,
      ContactNumber : value.phone
    })
  });
    
  this.dataSource = new MatTableDataSource(this.elements);
  console.log(this.dataSource)
  
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;   
});
}


  ngOnInit() {
    
  // Assign the data to the data source for the table to rend

  
}
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */

