import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { ContactComponent } from '../contact/contact.component';
import { CommonModule } from '@angular/common';
import { AddContactButtonComponent } from '../add-contact-button/add-contact-button.component';
import { AddContactComponent } from '../add-contact/add-contact.component';
import { Observable } from 'rxjs';

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
    <app-add-contact-button
      *ngIf="!showAddContactForm"
      (addContactClicked)="showAddContactForm = !showAddContactForm"
    ></app-add-contact-button>
    <app-add-contact *ngIf="showAddContactForm"></app-add-contact>
    <div id="contactContainer" *ngIf="!showAddContactForm">
      <app-contact
        *ngFor="let contact of contacts | async"
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
  contacts: Observable<Contact[]> | undefined;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
  }
}
