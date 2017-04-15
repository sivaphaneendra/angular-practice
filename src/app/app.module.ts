import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/posts/post.component';
import { Routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, Routing ],
  declarations: [ AppComponent, UserComponent, PostComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
