import { AfterViewInit, ChangeDetectionStrategy, Component, inject, signal, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TeamRowComponent } from "../team-row/team-row.component";

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogTitle } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    MatSidenavModule,
    RouterOutlet,
    MatToolbarModule,
    HeaderComponent,
    MatTableModule,
    MatPaginator,
    MatPaginatorModule,
    TeamRowComponent,
    MatFormFieldModule,
    MatSidenavModule,
    MatButtonModule,],
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
    { position: 9, name: 'SAS', wins: 40, loss: 42, delete: "Delete", edit:"Edit"},
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
 ;
  columnsToDisplay: string[] = this.displayedColumns.slice();
  private actionHistory: PeriodicElement[] = [];
  constructor(private dialog: MatDialog) {}
  
  public edit(element: PeriodicElement) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      data: { ...element } 
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.ELEMENT_DATA.findIndex(e => e.position === element.position);
        if (index >= 0) {
          this.ELEMENT_DATA[index] = { ...result, position: element.position, delete: 'Delete', edit: 'Edit' };
          this.dataSource.data = [...this.ELEMENT_DATA]; 
          console.log('Item edited');
        }
      }
    });
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
      return this.actionHistory.length === 0;
    }
    public Add() {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '300px'
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          const newItem: PeriodicElement = {
            position: this.ELEMENT_DATA.length + 1,
            name: result.name,
            wins: result.wins,
            loss: result.loss,
            delete: 'Delete',
            edit: 'Edit'
          };
          this.ELEMENT_DATA.push(newItem);
          this.dataSource.data = [...this.ELEMENT_DATA];
          console.log('Item added');
        }
      });
    }

 }
 export class DialogElements {
  readonly dialog = inject(MatDialog);
  openDialog() {
    this.dialog.open(DialogElementsDialog);
  } 
}
@Component({
  selector: 'dialog-elements-dialog',
  templateUrl: '../dialog/dialog.component.html',
  standalone: true,
  imports: [MatDialogTitle,
     MatDialogContent, 
     MatSidenavModule, 
     MatDialogActions, 
     FormsModule,  
      ReactiveFormsModule, 
      TableComponent,  
      MatDialogClose, 
      MatButtonModule, 
      FormsModule, 
      MatFormFieldModule, 
      MatInputModule,
      MatToolbarModule,
      MatDialogModule,
      MatSidenavModule, 
      MatButtonModule,
    ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogElementsDialog {
  public Add(){
    console.log("add");
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