import { Component } from '@angular/core';
import {DataService} from "./data.service";
import {NamesService} from "./names.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'archi-frontend';
  names: string[] = [];
  newName: string = '';
  data: any;

  constructor(private dataService: DataService,
              private namesService: NamesService) {}

  postName() {
    this.namesService.postName(this.newName)
      .subscribe(() => {
        this.newName = '';
        this.getNames();
      });
  }

  getNames() {
    this.namesService.getNames()
      .subscribe(data => {
        this.names = data.names;
      });
  }

  ngOnInit() {
    this.getNames();
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
