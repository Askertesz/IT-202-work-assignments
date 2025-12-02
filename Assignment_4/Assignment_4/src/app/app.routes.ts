import { Routes } from '@angular/router';
import { orderResolver } from './order-resolver';


export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
        return import('./home/home').then((m) => m.HomeComponent);
    },
},
{
    path: 'review-order',
    loadComponent: () => {
        return import('./review-order/review-order').then((m) => m.ReviewOrderComponent);
    },

    resolve: {
        orderDetails: orderResolver
    }
},
];
