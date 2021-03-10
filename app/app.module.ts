import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { TransPipe } from "./trans.pipe";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],

  declarations: [AppComponent, TransPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
