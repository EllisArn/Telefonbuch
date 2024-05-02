import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
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

  getContacts(): Observable<Contact[]> {
    const contactsCookie = this.cookieService.get('contacts');
    if (contactsCookie) {
      return of(JSON.parse(contactsCookie));
    } else {
      return this.http.get<Contact[]>(this.contactsUrl);
    }
  }

  addContact(contacts: Contact[]): void {
    const existingContacts: Contact[] = [];
    existingContacts.push(...contacts);
    this.saveContactsToCookie(existingContacts);
  }

  private saveContactsToCookie(contacts: Contact[]) {
    const serializedContacts = JSON.stringify(contacts);
    const expiresInDays = 30;

    this.cookieService.set('contacts', serializedContacts, {
      expires: expiresInDays,
      path: '/',
    });
  }
}
