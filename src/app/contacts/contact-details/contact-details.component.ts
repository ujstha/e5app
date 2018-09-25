import { Component, Input } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})

export class ContactDetailsComponent {
  @Input()
  contact: Contact;

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  constructor (private contactService: ContactService) {}

  createContact(contact: Contact) {
    this.contactService.createContact(contact).then((newContact: Contact) => {
      this.createHandler(newContact);
    });
  }

  updateContact(contactId: Contact): void {
    this.contactService.updateContact(contactId).then((updatedContactId: Contact) => {
      this.updateHandler(updatedContactId);
    });
  }

  deleteContact(contactId: String): void {
    this.contactService.deleteContact(contactId).then((deletedContactId: String) => {
      this.deleteHandler(deletedContactId);
    });
  }
}