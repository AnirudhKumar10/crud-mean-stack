import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateContactComponent } from './update-contact/update-contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'add-contact', component: AddContactComponent },
  { path: 'update-contact/:id', component: UpdateContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  UpdateContactComponent,
  AddContactComponent,
  DashboardComponent,
];
