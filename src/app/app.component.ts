import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <a routerLink="/">User Profile</a>
    <a routerLink="/posts">Posts</a>
    <hr/>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent  { 
 
}
