import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { UsersdataComponent } from './usersdata/usersdata.component';
import { GrdFilterPipe } from './usersdata/search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersdataComponent,
    GrdFilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
