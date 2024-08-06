import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog,MatDialogActions,MatDialogClose,MatDialogContent,MatDialogRef,MatDialogTitle,MatDialogContainer} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { TableComponent } from '../table/table.component';
import { MatSidenavModule } from '@angular/material/sidenav';
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
      width: '3000px', 
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