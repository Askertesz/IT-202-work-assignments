import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// Import Router here
import { Router, RouterLink, RouterOutlet } from '@angular/router'; 
import { Item, ItemService } from '../item'; 
import { Observable } from 'rxjs';
import { Header } from '../components/header/header';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Header, RouterOutlet, RouterLink], 
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {
  items$!: Observable<Item[]>; 

  // Inject the Router service in the constructor
  constructor(private itemService: ItemService, private router: Router) {}

  ngOnInit() {
    this.items$ = this.itemService.getItems();
  }

  // Add the orderItem method that starts the sequence
  orderItem(item: Item): void {
    // 1. Send the data to the Node.js backend via POST
    this.itemService.sendOrder(item).subscribe({
      next: (response) => {
        console.log(response.message); 

        // 2. Navigate to the review page
        this.router.navigate(['/review-order']);
      },
      error: (error) => {
        console.error('Error placing order:', error);
      }
    });
  }
}


/*
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item, ItemService } from '../item'; // Adjust path if necessary
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], // Add CommonModule for *ngFor
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {
  items$!: Observable<Item[]>; // Use the async pipe with an Observable

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.items$ = this.itemService.getItems();
  }
}





import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
*/
