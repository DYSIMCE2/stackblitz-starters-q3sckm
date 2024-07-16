import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <main> 
  <header class="th1">
  <table border="1">
  <div id="R.0">
    <th>Team</th>
    <th>W</th> 
    <th>L</th>
    <th> <select>
    <option><button>{{ime4}}</button></option>
    <option><button>{{ime5}}</button></option>
    <option><button>{{ime6}}</button></option>
  </select></th> 
  </div>
  </table>
  </header>
  
  </main>
  <table border="1">
  <div id="R.0">
    <th>Team</th>
    <th>W</th> 
    <th>L</th>
    <th> <select>
    <option><button>{{ime4}}</button></option>
    <option><button>{{ime5}}</button></option>
    <option><button>{{ime6}}</button></option>
  </select></th>
  </div>
  <div id="R1">
    <td>{{ime1}}</td>
    <td>72</td>
    <td>9</td>
   <td> <select>
    <option><button>{{ime4}}</button></option>
    <option><button>{{ime5}}</button></option>
    <option><button>{{ime6}}</button></option>
  </select></td>
  </div>
  <div id="R2">
    <td>{{ime2}}</td>
    <td>52</td>
    <td>28</td>
    <td> <select>
    <option><button>{{ime4}}</button></option>
    <option><button>{{ime5}}</button></option>
    <option><button>{{ime6}}</button></option>
  </select></td>
  </div>
  <div>
    <td>{{ime3}}</td>
    <td>25</td>
    <td>25</td>
    <td> <select>
    <option><button>{{ime4}}</button></option>
    <option><button>{{ime5}}</button></option>
    <option><button>{{ime6}}</button></option>
  </select></td>

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
