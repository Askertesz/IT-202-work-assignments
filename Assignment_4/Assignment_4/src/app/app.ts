import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Needed for *ngFor in template if you add data display

// Assuming Header is a standalone component:
import { Header } from './components/header/header'; 
// Assuming the service is defined in './item.ts' and has @Injectable()
import { ItemService } from './item'; 

@Component({
  selector: 'app-root',
  // You must explicitly state that this component is standalone:
  standalone: true, 
  // Only put standalone components/modules in the imports array:
  imports: [RouterOutlet, Header, HttpClientModule, CommonModule], 
  template: `
    <app-header />
    <main>
      <router-outlet />
      <!-- Example usage to display items fetched by your methods -->
      <ul>
        <li *ngFor="let item of items">{{ item.name }}</li>
      </ul>
    </main>
  `,
  styleUrl: './app.css'
})
// Implement OnInit directly on the main component class
export class App implements OnInit {
  protected readonly title = signal('Assignment_4');
  items: any[] = [];
  newItemName: string = '';

  // The service is injected here:
  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.fetchItems();
  }

  fetchItems() {
    this.itemService.getItems().subscribe(data => {
      this.items = data;
    });
  }

  addItem() {
    this.itemService.createItem(this.newItemName).subscribe(newItem => {
      this.items.push(newItem);
      this.newItemName = ''; // Clear input field
    });
  }
}






/*
import { Component, signal, OnInit, Injectable } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './components/header/header';
import { HttpClientModule } from '@angular/common/http';
import { ItemService } from './item';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, HttpClientModule],
  template: `<app-header />
  <main>
    <router-outlet />
  </ main>`,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Assignment_4');

   items: any[] = [];
  newItemName: string = '';

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.fetchItems();
  }

  fetchItems() {
    this.itemService.getItems().subscribe(data => {
      this.items = data;
    });
  }

  addItem() {
    this.itemService.createItem(this.newItemName).subscribe(newItem => {
      this.items.push(newItem);
      this.newItemName = ''; // Clear input field
    });
  }
}


*/




/*
export class AppComponent implements OnInit {
 
}
*/