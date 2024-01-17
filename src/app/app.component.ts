import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {ItemListComponent} from "./item-list/item-list.component";
import {AppModule} from "./app.module";
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AppModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'archi-frontend';
  data: any;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Erreur lors de la récupération des données', error);
      }
    );
  }
}
