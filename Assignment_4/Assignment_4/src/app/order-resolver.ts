// src/app/order-resolver.service.ts
import { Injectable } from '@angular/core';
import { ResolveFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, catchError, EMPTY } from 'rxjs';
import { ItemService, Item } from './item'; // Adjust path
import { inject } from '@angular/core';

// This is the resolver function that runs before the route loads
export const orderResolver: ResolveFn<Item> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<Item> => {
  const itemService = inject(ItemService);
  const router = inject(Router);

  return itemService.getLastOrder().pipe(
    catchError(() => {
      // If the API call fails or returns an error, redirect back home
      router.navigate(['/']);
      return EMPTY; // Return an empty observable to cancel navigation
    })
  );
};





/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderResolver {
  
}
*/
