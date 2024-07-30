import {ChangeDetectionStrategy, Component, inject}  from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog,MatDialogActions,MatDialogClose,MatDialogContent,MatDialogTitle,} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { TableComponent } from '../table/table.component';
import {  SidebarDialogService } from './dialog/dialog.component';
import { FormControl,FormGroupDirective,NgForm,Validators,ReactiveFormsModule,} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-edit-page',
  standalone: true,
  templateUrl: './edit-page.component.html',
  styleUrl: './edit-page.component.css'
})
export class DialogElements {
[x: string]: any;
  readonly dialog = inject(MatDialog);
  openDialog() {
    this.dialog.open(DialogElementsDialog);
  }
}
@Component({
  selector: 'dialog-elements-dialog',
  templateUrl: './dialog/dialog.component.html',
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
      BrowserAnimationsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogElementsDialog {
  constructor(private sidebarDialogService: SidebarDialogService) {}
    openSidebarDialog() {
      this.sidebarDialogService.open();
    }
  public Add(){
    console.log("add");

    
  }
}
export class EditPadeComponent {
}
export class Table2Component {

}