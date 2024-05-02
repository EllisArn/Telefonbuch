import { Component, Input } from '@angular/core';
import { DeleteContactService } from '../delete-contact.service';

interface Contact {
  name: string;
  surname: string;
  phoneNumber: string;
  email: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  template: `
    <div class="flexbox contactCard">
      <div class="flexbox contactCardHeader">
        <div class="flexbox contactCardHeaderTextContainer">
          <p class="contactCardHeaderText">{{ contact.name }}</p>
          <p class="contactCardHeaderText">{{ contact.surname }}</p>
        </div>
        <div class="flexbox deleteContactBtnContainer">
          <a class="flexbox btn deleteContactBtn" (click)="deleteContact()"
            >Löschen</a
          >
        </div>
      </div>
      <div class="flexbox contactCardMain">
        <p class="contactCardMainText">
          Telefonnummer: <br> {{ contact.phoneNumber }}
        </p>
        <p class="contactCardMainText">Emailadresse: <br> {{ contact.email }}</p>
      </div>
    </div>
  `,
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  @Input() contact!: Contact;

  constructor(private deleteContactService: DeleteContactService) {}

  deleteContact(): void {
    if (!confirm('Möchten Sie diesen Kontakt wirklich löschen?')) {
      return;
    }
    this.deleteContactService.deleteContact(this.contact.phoneNumber);
  }
}
