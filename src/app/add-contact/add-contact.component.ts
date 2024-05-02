import { Component } from '@angular/core';
import { AddContactService } from '../add-contact.service';

interface Contact {
  name: string;
  surname: string;
  phoneNumber: string;
  email: string;
}

@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [],
  styleUrl: './add-contact.component.css',
  template: `
    <div id="addContainer" class="flexbox">
      <div id="topBtnContainer" class="flexbox">
        <a class="flexbox btn" id="backBtn" (click)="goBack()">Zurück</a>
      </div>
      <div id="formContainer" class="flexbox">
        <p id="title" class="flexbox">Kontakt hinzufügen</p>
        <input
          id="inputName"
          class="inputfield"
          type="text"
          placeholder="Name"
        />
        <input
          id="inputSurname"
          class="inputfield"
          type="text"
          placeholder="Surname"
        />
        <input
          id="inputPhoneNumber"
          class="inputfield"
          type="tel"
          placeholder="Phone Number"
        />
        <input
          id="inputEmail"
          class="inputfield"
          type="email"
          placeholder="Email Address"
        />
        <a class="flexbox btn" id="addBtn" (click)="addContact()">Hinzufügen</a>
      </div>
    </div>
  `,
})
export class AddContactComponent {
  constructor(private addContactService: AddContactService) {}

  addContact(): void {
    const name = document.getElementById('inputName') as HTMLInputElement;
    const surname = document.getElementById('inputSurname') as HTMLInputElement;
    const phoneNumber = document.getElementById(
      'inputPhoneNumber'
    ) as HTMLInputElement;
    const email = document.getElementById('inputEmail') as HTMLInputElement;

    const contact: Contact = {
      name: name.value,
      surname: surname.value,
      phoneNumber: phoneNumber.value,
      email: email.value,
    };

    if (
      name.value === '' ||
      surname.value === '' ||
      phoneNumber.value === '' ||
      email.value === ''
    ) {
      alert('Bitte füllen Sie alle Felder aus.');
      return;
    }

    this.addContactService.addContact(contact);
    name.value = '';
    surname.value = '';
    phoneNumber.value = '';
    email.value = '';
    const addContainer = document.getElementById('addContainer');
    if (addContainer) {
      addContainer.style.display = 'none';
    }
    location.reload();
  }

  goBack(): void {
    const addContainer = document.getElementById('addContainer');
    const main = document.querySelector('main');
    if (addContainer && main) {
      addContainer.style.display = 'none';
      window.location.reload();
    }
  }
}
