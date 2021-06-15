import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contact } from '../contact';
import { __rest } from 'tslib';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(private ContactsService: ContactsService) {}

  contacts: any;
  contact: any;
  _id: string;
  first_name: string;
  last_name: string;
  phone: string;

  next() {
    this.ContactsService.getContacts().subscribe(
      (contact) => (this.contacts = contact)
    );
  }

  reset() {
    (this.first_name = ''), (this.last_name = ''), (this.phone = '');
  }

  ngOnInit() {
    this.next();
  }

  addcontact() {
    if (this._id == null) {
      const newContact = {
        first_name: this.first_name,
        last_name: this.last_name,
        phone: this.phone,
      };

      this.ContactsService.addcontact(newContact).subscribe((res) => {
        console.log(res);
      });
      this.next();
      this.reset();
    } else {
      const newContact = {
        first_name: this.first_name,
        last_name: this.last_name,
        phone: this.phone,
      };
      this.ContactsService.updateContact(this._id, newContact).subscribe(
        (res) => {
          console.log(res);
        }
      );
      this.next();
      this.reset();
    }
  }

  deleteContact(id: any) {
    var contacts = this.contacts;
    this.ContactsService.deleteContact(id).subscribe((data) => {
      console.log(`id : ${id} is deleted`);

      this.ContactsService.getContacts().subscribe(
        (contact) => (this.contacts = contact)
      );
    });
  }

  editContact(contact: any) {
    this.first_name = contact.first_name;
    this.last_name = contact.last_name;
    this.phone = contact.phone;
    this._id = contact._id;
    console.log(this._id);
  }
}
