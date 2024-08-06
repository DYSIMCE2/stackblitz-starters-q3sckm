import { Component } from '@angular/core';
import {ChangeDetectionStrategy, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog,MatDialogActions,MatDialogClose,MatDialogContent,MatDialogRef,MatDialogTitle,MatDialogContainer} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { TableComponent } from '../../table/table.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DialogElements } from '../edit-page.component';

import { Injectable } from '@angular/core';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatDialogTitle,
     MatDialogContent, 
     MatSidenavModule, 
     MatDialogActions, 
     MatDialogClose, 
     MatButtonModule, 
     FormsModule,
      MatFormFieldModule, 
    MatInputModule,
    TableComponent,
 DialogElements ,
 ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  public Add(){
    console.log("add");
 }
}

@Injectable({
  providedIn: 'root'
})
export class SidebarDialogService {

  constructor(private dialog: MatDialog) { }

  open() {
    const MatDialogConfig = {
      width: '300px', 
      position: {
        right: '0px', 
        top: '0px'    
      },
    };
    const dialogConfig: MatDialogRef<DialogComponent> = this.dialog.open(DialogComponent, MatDialogConfig ); {
     
    };

    dialogConfig.afterClosed().subscribe(result => {
      console.log('The sidebar dialog was closed');
    });
  }

  close() {
    this.dialog.closeAll();
  }
  
}


// import { Component, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { MatTableDataSource } from '@angular/material/table';
// import { AddRowDialogComponent } from './add-row-dialog/add-row-dialog.component'; // Adjust path as needed
// import { TableRow } from './table-row.model'; // Adjust path as needed

// @Component({
//   selector: 'app-table',
//   templateUrl: './table.component.html',
//   styleUrls: ['./table.component.css']
// })
// export class TableComponent implements OnInit {
//   displayedColumns: string[] = ['position', 'name', 'winn', 'loss', 'delete', 'edit'];
//   dataSource = new MatTableDataSource<TableRow>([]);

//   constructor(private dialog: MatDialog) { }

//   ngOnInit(): void {
//     // Initialize data or fetch from a service if needed
//   }

//   openAddDialog(): void {
//     const dialogRef = this.dialog.open(AddRowDialogComponent, {
//       width: '300px',
//       data: { position: null, name: '', winn: null, loss: null } // Default values
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       if (result) {
//         this.addRow(result);
//       }
//     });
//   }

//   addRow(row: TableRow): void {
//     // Create a new row object
//     const newRow: TableRow = {
//       position: row.position,
//       name: row.name,
//       winn: row.winn,
//       loss: row.loss
//     };

//     // Add the new row to the data source
//     this.dataSource.data = [...this.dataSource.data, newRow];
//   }

//   deleteRow(row: TableRow): void {
//     // Implement delete logic
//     console.log('Deleting row:', row);
//     this.dataSource.data = this.dataSource.data.filter(item => item !== row);
//   }

//   editRow(row: TableRow): void {
//     // Implement edit logic
//     console.log('Editing row:', row);
//   }