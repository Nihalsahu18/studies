import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  //add contact
  addcontact(newContact) {
    return this.http.post(
      'http://localhost:3000/api/contact',
      newContact,
      this.httpOptions
    );
  }

  // get all the contacts
  getContacts() {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', 'content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get('http://localhost:3000/api/contacts', { headers });
  }

  // delete method
  deleteContact(id) {
    return this.http.delete('http://localhost:3000/api/contact/' + id);
  }

  // edit method
  updateContact(id, data) {
    return this.http.put(
      'http://localhost:3000/api/contact/' + id,
      data,
      this.httpOptions
    );
  }
}
