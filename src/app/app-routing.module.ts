import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsTableComponent } from './items-table/items-table.component';
import { TradesComponent } from './trades/trades.component';


const routes: Routes = [
  { path: 'items', component: ItemsTableComponent},
  { path: 'trades', component: TradesComponent},

  { path: '**', component: ItemsTableComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
