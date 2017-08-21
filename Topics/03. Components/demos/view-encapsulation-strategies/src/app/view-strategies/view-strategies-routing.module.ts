import { NoneComponent } from './none.component';
import { NativeComponent } from './native.component';
import { EmulatedComponent } from './emulated.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'emulated', pathMatch: 'full' },
  { path: 'emulated', component: EmulatedComponent },
  { path: 'native', component: NativeComponent },
  { path: 'none', component: NoneComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewStrategiesRoutingModule { }
