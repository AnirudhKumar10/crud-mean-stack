import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class ContactService {

  constructor(private http: HttpClient) {}

  contact: Contact[];
  url = 'http://localhost:4000/clients';

  getContact(id) {
    return this.http.get(this.url+'/'+id)
  }

  getAllContact() {
    return this.http.get(this.url)
  }

  addContact(contact) {
    return this.http.post(this.url+'/add', contact)
  }

  updateContact(id, contact) {
    return this.http.put(this.url+'/update/'+id, contact)
  }

  deleteContact(id) {
    return this.http.delete(this.url+'/remove/'+id)
  }
}
