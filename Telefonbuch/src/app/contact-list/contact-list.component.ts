import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { ContactComponent } from '../contact/contact.component';
import { CommonModule } from '@angular/common';
import { AddContactButtonComponent } from '../add-contact-button/add-contact-button.component';
import { AddContactComponent } from '../add-contact/add-contact.component';

interface Contact {
  name: string;
  surname: string;
  phoneNumber: string;
  email: string;
}

@Component({
  selector: 'app-contacts-list',
  standalone: true,
  template: `
    <div class="contacts-container">
      <app-add-contact-button
        (addContactClicked)="showAddContactForm = !showAddContactForm"
      ></app-add-contact-button>
      <app-add-contact *ngIf="showAddContactForm"></app-add-contact>
      <app-contact
        *ngFor="let contact of contacts"
        [contact]="contact"
      ></app-contact>
    </div>
  `,
  styleUrls: ['./contact-list.component.css'],
  imports: [
    CommonModule,
    ContactComponent,
    AddContactButtonComponent,
    AddContactComponent,
  ],
})
export class ContactListComponent implements OnInit {
  showAddContactForm: boolean = false;
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    console.log(this.contactService.getContacts());
    this.contacts = this.contactService.getContacts();
  }
}
