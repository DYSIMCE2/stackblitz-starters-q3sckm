import { Component } from '@angular/core';
import {ChangeDetectionStrategy, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog,MatDialogActions,MatDialogClose,MatDialogContent,MatDialogTitle,} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { TableComponent } from '../../table/table.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DialogElements } from '../edit-page.component';
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
 DialogElements  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  [x: string]: any;
   public Add(){
     console.log("add");
  }
}

import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class SidebarDialogService {

  constructor(private dialog: MatDialog) { }

  open() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px', // Adjust width as needed
      panelClass: 'sidebar-dialog-container' // Custom CSS class for styling
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The sidebar dialog was closed');
    });
  }

  close() {
    this.dialog.closeAll();
  }

}


// <th>Num</th>
//       <th>Team</th>
//       <th>Wins</th>
//       <th>Loss</th>
//       @for(tableRow of ELEMENT_DATA; track tableRow){
//         <tr>
//           <td>{{tableRow.position}}</td>
//           <td>{{tableRow.name}}</td>
          
//           <td>{{tableRow.wins}}</td>
//           <td>{{tableRow.loss}}</td>
//         </tr>
//       }
