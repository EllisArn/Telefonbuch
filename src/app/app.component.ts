import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { AddContactButtonComponent } from './add-contact-button/add-contact-button.component';
import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    AddContactComponent,
    AddContactButtonComponent,
    ContactListComponent,
    ContactComponent,
  ],
})
export class AppComponent {
  title = 'Telefonbuch';
}
