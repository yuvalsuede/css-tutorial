import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <a routerLink="/">
        <h1>
          {{title}}
        </h1>
      </a>
      <nav class="navbar navbar-default">
          <ul class="nav navbar-nav">
              <li><a routerLink="/position" routerLinkActive="active">position</a></li>
              <li><a routerLink="/display" routerLinkActive="active">display</a></li>
              <li><a routerLink="/pseudo" routerLinkActive="active">pseudo-elements</a></li>
              <li><a routerLink="/alignment" routerLinkActive="active">alignment</a></li>
              <li><a routerLink="/visibility" routerLinkActive="active">visibility</a></li>
              <li><a routerLink="/examples" routerLinkActive="active">examples</a></li>
          </ul>
      </nav>
    </div>
   
    <router-outlet></router-outlet>
`,
  styles: [`
    a.active {
        color: black;
        font-weight:bold;
    }
    a,a:hover {
        text-decoration: none;
    }
    `]
})
export class AppComponent {
  title = 'CSS Tutorial';

}
