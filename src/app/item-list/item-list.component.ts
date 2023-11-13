import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  items: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchItems();
  }

  fetchItems(): void {
    this.http.get<any[]>('http://10.123.1.4:8000/items/') // Remplacez par l'URL de votre serveur FastAPI
      .subscribe(items => this.items = items);
  }

  createItem(): void {
    const newItem = { name: 'New Item', description: 'Description' };
    this.http.post('http://10.123.1.4:8000/items/', newItem) // Remplacez par l'URL de votre serveur FastAPI
      .subscribe(response => {
        console.log('Item created successfully', response);
        this.fetchItems();
      });
  }
}
