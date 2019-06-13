import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { KegsComponent } from './kegs/kegs.component';


@NgModule({
  declarations: [
    AppComponent,
    KegsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  // providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
