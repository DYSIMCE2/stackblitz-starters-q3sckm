import { Component, Input  } from '@angular/core';
import { PeriodicElement } from '../table/table.component';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
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

  ]


  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  columnsToDisplay = ['position', 'name', 'Winn', 'Loss', 'delete'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: PeriodicElement | null;


 
  

}






