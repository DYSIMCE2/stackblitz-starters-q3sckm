import { Component } from '@angular/core';
import { RowsComponent} from '../rows/rows.component';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [HeaderComponent,RowsComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  
}
