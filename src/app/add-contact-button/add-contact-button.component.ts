import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-contact-button',
  standalone: true,
  imports: [],
  template: `
    <a class="flexbox btn" id="addContactBtn" (click)="onClick()"
      >Kontakt Hinzufügen</a
    >
  `,
  styleUrl: './add-contact-button.component.css',
})
export class AddContactButtonComponent {
  @Output() addContactClicked: EventEmitter<void> = new EventEmitter<void>();

  onClick(): void {
    this.addContactClicked.emit();
  }
}
