import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  
   
    <select>
      <option>x</option>
      <option>y</option>
      <option>z</option>
    </select>
    <table border="1">
      <div id="R.0">
        <th >Tim</th>
        <th >Win</th> 
        <th >Los</th>
        <button>{{ime4}}</button>
        <button>{{ime5}}</button>
        <button>{{ime6}}</button>
      </div>
      <div id="R1">
        <td >{{ime1}}</td>
        <td >72</td>
        <td >9</td>
        <button>{{ime4}}</button>
        <button>{{ime5}}</button>
        <button>{{ime6}}</button>
      </div>
      <div id="R2">
        <td >{{ime2}}</td>
        <td >52</td>
        <td >28</td>
        <button>{{ime4}}</button>
        <button>{{ime5}}</button>
        <button>{{ime6}}</button>
      </div>
      <div>
        <td>{{ime3}}</td>
        <td>25</td>
        <td>25</td>
        <button>{{ime4}}</button>
        <button>{{ime5}}</button>
        <button>{{ime6}}</button>
      </div>
    </table>
   

    
    
  `,
})
export class App {

  ime1 = 'GSW';
  ime2 = 'LAL';
  ime3 = 'LAC';
  ime4 = 'View';
  ime5 = 'Edit';
  ime6 = 'Delete';
}

bootstrapApplication(App);
