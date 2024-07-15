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
      <tr>
        <th>Tim</th>
        <th>Win</th>
        <th>Los</th>
      </tr>
      <tr>
        <td>{{ime1}}</td>
        <td>72</td>
        <td>9</td>
      </tr>
      <tr>
        <td>{{ime2}}</td>
        <td>52</td>
        <td>28</td>
      </tr>
      <tr>
        <td>{{ime3}}</td>
        <td>25</td>
        <td>25</td>
      </tr>
    </table>
    <table>
      <tr>
        <button name="button"  href="youtube.com">{{ime4}}</button>
      </tr>
    </table>

    
    
  `,
})
export class App {
  name = 'Angular';
  ime1 = 'GSW';
  ime2 = 'LAL';
  ime3 = 'LAC';
  ime4 = 'youtube';
}

bootstrapApplication(App);
