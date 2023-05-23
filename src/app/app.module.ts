import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SwitchComponent } from './Components/switch/switch.component';
import { NgClassComponent } from './Components/ng-class/ng-class.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent,
    NgClassComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
