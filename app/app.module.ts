import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { AppComponent }         from './app.component';
import { TransPipe }            from './trans.pipe';
@NgModule({
  imports: [ BrowserModule ],

  declarations: [ AppComponent, TransPipe],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}
