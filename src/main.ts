import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  
   
    <select name="drop down">
      <option>x</option>
      <option>y</option>
      <option>z</option>
    </select>
    <table name ="tabela" border="1">
      <tr id="R.0">
        <th id="0.0">Tim</th>
        <th id="0.1">Win</th>
        <th id="0.2">Los</th>
      </tr>
      <tr id="R1">
        <td id="1.0">{{ime1}}</td>
        <td id="1.1">72</td>
        <td id="1.2">9</td>
      </tr>
      <tr id="R2">
        <td id="2.0">{{ime2}}</td>
        <td id="2.1">52</td>
        <td id="2.2">28</td>
      </tr>
      <tr>
        <td >{{ime3}}</td>
        <td>25</td>
        <td>25</td>
      </tr>
    </table>
    <table>
      <tr>
        <button  name="button"  href="youtube.com">{{ime4}}</button>
      </tr>
    </table>

    
    
  `,
})
export class App {

  ime1 = 'GSW';
  ime2 = 'LAL';
  ime3 = 'LAC';
  ime4 = 'youtube';
}

bootstrapApplication(App);
