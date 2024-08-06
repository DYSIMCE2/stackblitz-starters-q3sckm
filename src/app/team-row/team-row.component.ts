import { Component, Input  } from '@angular/core';
import { PeriodicElement } from '../table/table.component';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { SidebarDialogService } from '../edit-page/dialog/dialog.component';
@Component({
  selector: 'app-team-row',
  standalone: true,
  imports: [ MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './team-row.component.html',
  styleUrl: './team-row.component.css',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TeamRowComponent   {
  // @Input() team: PeriodicElement;
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
  ]


  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  columnsToDisplay = ['position', 'name', 'Winn', 'Loss', 'delete'];

  expandedElement!: PeriodicElement | null;


 
  

}






