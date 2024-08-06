import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DialogComponent } from "../edit-page/dialog/dialog.component";
@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, DialogComponent],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.css'
})
export class DrawerComponent {
  showFiller = false;
}


