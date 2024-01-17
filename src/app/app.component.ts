import { Component } from '@angular/core';
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
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
