import { Component } from '@angular/core';
import { Contact } from '../contact';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent {
  contact = new Contact();

  constructor(private router: Router, private contactService: ContactService) {}

  addContact() {
    this.contactService.addContact(this.contact).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/']);
    });
  }

  back() {
    this.router.navigate(['/']);
  }
}
