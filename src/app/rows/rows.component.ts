import { Component } from '@angular/core';

@Component({
  selector: 'app-rows',
  standalone: true,
  imports: [],
  templateUrl: './rows.component.html',
  styleUrl: './rows.component.css'
})
export class RowsComponent {
  ime1 = 'GSW';
  ime2 = 'LAL';
  ime3 = 'LAC';
  ime4 = 'View';
  ime5 = 'Edit';
  ime6 = 'Delete';
  
}
export interface info{
  name: string;
  wins: number;
  loses: number;
  dropdown: {view: string, edit: string, delete: string}
}