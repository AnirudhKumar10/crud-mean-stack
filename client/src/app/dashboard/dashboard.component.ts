import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  contacts;

  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit() {
    this.contactService.getAllContact().subscribe((data) => {
      this.contacts = data;
    });
  }

  createContact() {
    this.router.navigate(['/add-contact']);
  }

  editContact(id) {
    this.router.navigate(['/update-contact/' + id]);
  }

  deleteContact(id) {
    this.contactService.deleteContact(id).subscribe((data) => {
      console.log(data);
      this.contactService.getAllContact().subscribe((data) => {
        this.contacts = data;
      });
    });
  }
}
