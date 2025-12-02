import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { Item, ItemService } from '../item'


@Component({
  selector: 'app-review-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review-order.html',
  styleUrl: './review-order.css',
})
export class ReviewOrderComponent implements OnInit {

  //resolver should guarantee that the data is there
  selectedItem!: Item;
  orderConfirmed: boolean = false;
  confirmationMessage: string = '';

  //constructor(private router: Router, private itemService: ItemService){}
  constructor(private router: Router, private route: ActivatedRoute, private itemService: ItemService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    
    this.selectedItem = this.route.snapshot.data['orderDetails'] as Item;

    console.log("Data loaded via Resolver: ", this.selectedItem.name);

    

    /*
    // Fetch the data from the Node.js API when the page loads
    this.itemService.getLastOrder().subscribe({
      next: (itemData) => {
        console.log("Data received in component: ", itemData);
        this.selectedItem = itemData;
      },
      error: (err) => {
        console.error("Could not fetch last order:", err);
        // Handle error, e.g., redirect home if no order is found
        // this.router.navigate(['/']); 
      }
    });
  }
  */
  }
  submitOrder(): void {
      if (this.selectedItem){
        this.itemService.submitFinalOrder(this.selectedItem).subscribe({
          next: (response) => {
            this.confirmationMessage = response.message;
            this.orderConfirmed = true;

            this.cdr.detectChanges();
            console.log("Order Submitted: ", response.message);
          },
          error: (err) => {
            console.error("Error submitting final order: ", err);
            this.confirmationMessage = 'An error occurred during submission.';
          }
        })
      }
    }
}
