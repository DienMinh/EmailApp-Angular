import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MessagesComponent } from './Components/messages/messages.component';
import { ContactsComponent } from './Components/contacts/contacts.component';
import { PreferencesComponent } from './Components/preferences/preferences.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'messages',
    pathMatch: 'full',
  },
  {
    path: 'messages',
    component: MessagesComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: 'preferences',
    component: PreferencesComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
