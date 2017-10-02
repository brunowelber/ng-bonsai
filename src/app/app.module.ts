import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreeRootComponent } from './tree-root/component';
import { TreeNodeComponent } from './tree-node/component';


@NgModule({
  declarations: [
    AppComponent, 
    TreeRootComponent,
    TreeNodeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
