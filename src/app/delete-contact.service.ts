import { Injectable } from '@angular/core';
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
export class DeleteContactService {
  constructor(private cookieService: CookieService) {}

  deleteContact(phoneNumber: string): void {
    const existingContacts = this.getContactsFromCookie();
    const updatedContacts = existingContacts.filter(
      (contact) => contact.phoneNumber !== phoneNumber
    );
    this.saveContactsToCookie(updatedContacts);
    window.location.reload();
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
