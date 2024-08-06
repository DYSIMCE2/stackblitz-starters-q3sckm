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
import {MatButtonModule} from '@angular/material/button';
import { DialogComponent } from '../edit-page/dialog/dialog.component';
import { DrawerComponent } from "../drawer/drawer.component";
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
    DialogComponent,
    MatSidenavModule,
    MatButtonModule, DrawerComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements AfterViewInit {
  ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'GSW', wins: 73, loss: 9, delete: "Delete" ,edit:"Edit"},
    { position: 2, name: 'DEN', wins: 62, loss: 20, delete: "Delete",edit:"Edit"},
    { position: 3, name: 'DAl', wins: 56, loss: 26, delete: "Delete",edit:"Edit"},
    { position: 4, name: 'OKC', wins: 55, loss: 27, delete: "Delete", edit:"Edit"},
    { position: 5, name: 'MIN', wins: 55, loss: 27, delete: "Delete", edit:"Edit"},
    { position: 6, name: 'LAL', wins: 48, loss: 34, delete: "Delete", edit:"Edit"},
    { position: 7, name: 'LAC', wins: 44, loss: 38, delete: "Delete", edit:"Edit"},
    { position: 8, name: 'MEM', wins: 43, loss: 39, delete: "Delete" ,edit:"Edit"},
    { position: 9, name: 'SAS', wins: 40, loss: 42, delete: "Delete", edit:"Edit" },
    { position: 10, name: 'PHX', wins: 31, loss: 51, delete: "Delete", edit:"Edit"},
    { position: 11, name: 'NOP', wins: 28, loss: 54, delete: "Delete",edit:"Edit"},
    { position: 12, name: 'HOU', wins: 22, loss: 60, delete: "Delete" ,edit:"Edit"},
    { position: 13, name: 'UTA', wins: 15, loss: 67, delete: "Delete",edit:"Edit"},

  ];
  displayedColumns: string[] = ['position', 'name', 'Winn', 'Loss', 'delete', 'edit'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  columnsToDisplay: string[] = this.displayedColumns.slice();
  private actionHistory: PeriodicElement[] = [];
public edit(element: PeriodicElement){
  console.log("edit");
}
public remove(element: PeriodicElement) {
  const index = this.dataSource.data.indexOf(element);
  if (index >= 0) {
    const removedElement = this.dataSource.data.splice(index, 1)[0];
    this.actionHistory.push({ ...removedElement }); 
    this.dataSource.data = [...this.dataSource.data]; 
    console.log("Removed");
  }
}
    public undo() {
      if (this.actionHistory.length > 0) {
        const lastRemoved = this.actionHistory.pop();
        if (lastRemoved) {
         
          const indexToInsert = this.dataSource.data.findIndex(item => item.position >= lastRemoved.position);
          if (indexToInsert === -1) {
          
            this.dataSource.data.push(lastRemoved);
          } else {
         
            this.dataSource.data.splice(indexToInsert, 0, lastRemoved);
          }
          this.dataSource.data = [...this.dataSource.data]; 
          console.log("Undo successful");
        }
      }
    }
    isUndoDisabled(): boolean {
      // Check if there are no deleted items
      return this.actionHistory.length === 0;
    }
    }
  

export interface PeriodicElement {
  name: string;
  delete: string;
  position: number;
  wins: number;
  loss: number;
  edit:string;

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

















