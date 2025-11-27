import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Header } from './header/header';
import { ApiService, Shopping } from './services/shopping';
import { Item } from './item';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Header],
  template: `<app-header /> 
  <main>
  <app-home />
  </main>`,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Assignment_4');
}

export class AppComponent implements OnInit {
  items: any[] = [];
  errorMessage: string = '';

  constructor(private shopping: Shopping) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.shopping.getData().subscribe({
      next: (data: any[]) => {
        // Success handler: Data received from the API
        this.items = data;
        console.log('Data fetched:', this.items);
      },
      error: (err) => {
        // Error handler: Error caught by the 'catchError' in the service
        this.errorMessage = err.message;
        console.error('Component error:', err);
      },
      complete: () => {
        // Optional: Called when the observable completes (no more values)
        console.log('API call complete.');
      }
    });
  }
  
  // Example function to call the POST request
  addNewItem(): void {
    const newItem = { name: 'New Item ' + Date.now() };
    this.shopping.createItem(newItem).subscribe({
      next: (response) => {
        console.log('Item created successfully', response);
        this.fetchData(); // Refresh the list after adding
      },
      error: (err) => this.errorMessage = err.message
    });
  }
}

