import { Routes } from '@angular/router';
import { InterpolationComponent } from './interpolation';
import { PropertyComponent } from './property';
import { EventRootComponent } from './event';
import { TwoWayComponent } from './two-way';

export const appRoutes: Routes = [
    { path: 'interpolation', component: InterpolationComponent },
    { path: 'property', component: PropertyComponent },
    { path: 'event', component: EventRootComponent },
    { path: 'two-way', component: TwoWayComponent },
    { path: '**', component: InterpolationComponent }
];
