import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
        return import('./home/home').then((m) => m.Home);
    },
},
{
    path: 'review-order',
    loadComponent: () => {
        return import('./review-order/review-order').then((m) => m.ReviewOrder);
    },
},
];
