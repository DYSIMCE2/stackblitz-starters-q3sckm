import { AfterViewInit, Component, signal, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DialogElements } from "../edit-page/edit-page.component";
import { TeamRowComponent } from "../team-row/team-row.component";
import { Injectable } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterOutlet } from '@angular/router';
import { DialogComponent } from "../edit-page/dialog/dialog.component";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatFormFieldModule,
      MatSidenavModule,
      RouterOutlet, 
      MatToolbarModule, 
      HeaderComponent,
      MatTableModule, 
      MatPaginator,
      MatPaginatorModule,
      DialogElements, 
      TeamRowComponent,
      DialogComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements AfterViewInit {
  ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'GSW', wins: 73, loss: 9, delete: "Delete" ,edit:"Edit",expand:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    { position: 2, name: 'DEN', wins: 62, loss: 20, delete: "delete",edit:"Edit", expand:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "},
    { position: 3, name: 'DAl', wins: 56, loss: 26, delete: "delete",edit:"Edit", expand:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "},
    { position: 4, name: 'OKC', wins: 55, loss: 27, delete: "delete", edit:"Edit", expand:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "},
    { position: 5, name: 'LAL', wins: 48, loss: 34, delete: "delete", edit:"Edit", expand:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "},
    { position: 6, name: 'LAC', wins: 44, loss: 38, delete: "delete", edit:"Edit", expand:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "},
    { position: 7, name: 'MEM', wins: 43, loss: 39, delete: "delete" ,edit:"Edit", expand:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    { position: 8, name: 'SAS', wins: 40, loss: 42, delete: "delete", edit:"Edit", expand:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "},
    { position: 9, name: 'PHX', wins: 31, loss: 51, delete: "delete", edit:"Edit",expand:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "},
    { position: 10, name: 'NOP', wins: 28, loss: 54, delete: "delete",edit:"Edit",  expand:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "},
    { position: 11, name: 'GSW', wins: 73, loss: 9, delete: "delete" ,edit:"Edit", expand:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "},
    { position: 12, name: 'DEN', wins: 62, loss: 20, delete: "delete",edit:"Edit",  expand:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    { position: 13, name: 'DAl', wins: 56, loss: 26, delete: "delete", edit:"Edit", expand:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "},
    { position: 14, name: 'OKC', wins: 55, loss: 27, delete: "delete" ,edit:"Edit", expand:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "},
    { position: 15, name: 'LAL', wins: 48, loss: 34, delete: "delete" ,edit:"Edit", expand:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "},
    { position: 16, name: 'LAC', wins: 44, loss: 38, delete: "delete",edit:"Edit",  expand:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "},
    { position: 17, name: 'MEM', wins: 43, loss: 39, delete: "delete",edit:"Edit", expand:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "},
    { position: 18, name: 'SAS', wins: 40, loss: 42, delete: "delete",edit:"Edit", expand: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "},
    { position: 19, name: 'PHX', wins: 31, loss: 51, delete: "delete",edit:"Edit", expand: "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    { position: 20, name: 'NOP', wins: 28, loss: 54, delete: "delete",edit:"Edit", expand: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "},
    { position: 21, name: 'GSW', wins: 73, loss: 9, delete: "delete",  edit:"Edit",expand:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "},
    { position: 22, name: 'DEN', wins: 62, loss: 20, delete: "delete", edit:"Edit",expand:"Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { position: 23, name: 'DAl', wins: 56, loss: 26, delete: "delete", edit:"Edit", expand:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    { position: 24, name: 'OKC', wins: 55, loss: 27, delete: "delete", edit:"Edit",expand:"Lorem ipsum dolor sit amet consectetur adipisicing elit. " },
    { position: 25, name: 'LAL', wins: 48, loss: 34, delete: "delete", edit:"Edit",expand:"Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { position: 26, name: 'LAC', wins: 44, loss: 38, delete: "delete", edit:"Edit",expand:"Lorem ipsum dolor sit amet consectetur adipisicing elit. " },
    { position: 27, name: 'MEM', wins: 43, loss: 39, delete: "delete", edit:"Edit", expand:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "},
    { position: 28, name: 'SAS', wins: 40, loss: 42, delete: "delete", edit:"Edit",expand: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "},
    { position: 29, name: 'PHX', wins: 31, loss: 51, delete: "delete", edit:"Edit", expand: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "},
    { position: 30, name: 'NOP', wins: 28, loss: 54, delete: "delete", edit:"Edit", expand:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "},

  ];
  displayedColumns: string[] = ['position', 'name', 'Winn', 'Loss', 'delete', 'edit'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  columnsToDisplay: string[] = this.displayedColumns.slice();
 Action: PeriodicElement[] = [];
public edit(element: PeriodicElement){
  console.log("edit");
}

  public remove(element: PeriodicElement) {
    const index = this.dataSource.data.indexOf(element);
    if (index >= 0) {
      const removedElement = this.dataSource.data.splice(index, 1)[0];
      this.Action.push(removedElement); // Push removed element to history
      this.dataSource.data = [...this.dataSource.data]; // Update dataSource
      console.log("Removed");
    }
  }
  public undo() {
    if (this. Action.length > 0  ) {
      const lastRemoved = this.Action.pop();
      if(lastRemoved !== undefined && lastRemoved !== null){
        console.log("index: ", lastRemoved);
        let beforeData: PeriodicElement[] = [];
        let afterData: PeriodicElement[] = [];
        beforeData = structuredClone(this.dataSource.data.slice(0, lastRemoved.position - 1));
        afterData = this.dataSource.data.slice(lastRemoved.position -1, this.dataSource.data.length );
        console.log("before data = > ", beforeData);
        console.log("after data = > ", afterData);
// for(let i = this.history.length -1 ; i >= 0; i--){
//   for{
    
//   }
  beforeData.push(lastRemoved);
  console.log("before data after push = > ", beforeData);
  this.dataSource.data = [...beforeData, ...afterData];

  console.log("undo");
 }
        // this.dataSource.data.push(lastRemoved!); // Add last removed element back to data source
        // this.dataSource.data = [...this.dataSource.data]; // Update dataSource
      }
    }
  }

export interface PeriodicElement {
  name: string;
  delete: string;
  position: number;
  wins: number;
  loss: number;
  edit:string;
  expand:string;
}





// ****************************UNDO******************************************
// public remove(element: PeriodicElement) {
//   const index = this.dataSource.data.indexOf(element);
//   if (index >= 0) {
//     const removedElement = this.dataSource.data.splice(index, 1)[0];
//     if (!this.history[index]) {
//       this.history[index] = []; // Initialize history array for this index if not already present
//     }
//     this.history[index].push(removedElement); // Push removed element to history for this index
//     this.dataSource.data = [...this.dataSource.data]; // Update dataSource
//   }
// }

// public undo() {
//   // Find the last non-empty history stack and restore the last removed element
//   for (let i = this.history.length - 1; i >= 0; i--) {
//     if (this.history[i]?.length > 0) {
//       const lastRemoved = this.history[i].pop();
//       if (lastRemoved) {
//         this.dataSource.data.splice(i, 0, lastRemoved); // Add back the last removed element
//         this.dataSource.data = [...this.dataSource.data]; // Update dataSource
//         break;
//       }
//     }
//   }
// }

















