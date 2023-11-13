import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ItemListComponent} from "./item-list/item-list.component";
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from "./app.component";

@NgModule({
  declarations: [ItemListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [ItemListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
