import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
export class ContactService {
  private contactsUrl = '../assets/contacts.json';

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  getContacts(): Contact[] {
    return this.getContactsFromCookie();
  }

  addContact(contacts: Contact[]): void {
    const existingContacts: Contact[] = [];
    existingContacts.push(...contacts);
    this.saveContactsToCookie(existingContacts);
  }

  getContactsFromCookie(): Contact[] {
    const contactsCookie = this.cookieService.get('contacts');
    if (contactsCookie) {
      return JSON.parse(contactsCookie);
    } else {
      this.http.get<Contact[]>(this.contactsUrl).subscribe((contacts) => {
        this.saveContactsToCookie(contacts);
      });
      return JSON.parse(this.cookieService.get('contacts'));
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
