import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

interface Contact {
  name: string;
  surname: string;
  phoneNumber: string;
  email: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgFor],
  template: `
    <div *ngFor="let contact of contacts" class="flexbox contactCard">
      <div class="flexbox contactCardHeader">
        <div class="flexbox contactCardHeaderTextContainer">
          <p class="contactCardHeaderText">{{ contact.name }}</p>
          <p class="contactCardHeaderText">{{ contact.surname }}</p>
        </div>
        <div class="flexbox deleteContactBtnContainer">
          <a class="flexbox btn deleteContactBtn">Löschen</a>
        </div>
      </div>
      <div class="flexbox contactCardMain">
        <p class="contactCardMainText">
          Telefonnummer: {{ contact.phoneNumber }}
        </p>
        <p class="contactCardMainText">Emailadresse: {{ contact.email }}</p>
      </div>
    </div>
  `,
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contacts: Contact[] = [
    {
      name: 'Name',
      surname: 'Nachname',
      phoneNumber: '079 690 56 05',
      email: 'J.Lehner.inf21@stud.bbbaden.ch',
    },
    {
      name: 'Max',
      surname: 'Mustermann',
      phoneNumber: '012 345 67 89',
      email: 'max.mustermann@example.com',
    },
    {
      name: 'Erika',
      surname: 'Musterfrau',
      phoneNumber: '098 765 43 21',
      email: 'erika.musterfrau@example.com',
    },
  ];
}
