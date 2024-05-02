import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

interface Contact {
  name: string;
  surname: string;
  phoneNumber: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class AddContactService {
  constructor(private cookieService: CookieService) {}

  addContact(contact: Contact): void {
    const existingContacts = this.getContactsFromCookie();
    existingContacts.push(contact);
    this.saveContactsToCookie(existingContacts);
  }

  getContactsFromCookie(): Contact[] {
    const contactsCookie = this.cookieService.get('contacts');
    if (contactsCookie) {
      return JSON.parse(contactsCookie);
    } else {
      return [];
    }
  }

  saveContactsToCookie(contacts: Contact[]) {
    const serializedContacts = JSON.stringify(contacts);
    const expiresInDays = 30;

    this.cookieService.set('contacts', serializedContacts, {
      expires: expiresInDays,
      path: '/',
    });
  }
}
