import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css'],
})
export class UpdateContactComponent {
  contact;

  ngOnInit() {
    this.contactService
      .getContact(this.id)
      .subscribe((data) => (this.contact = data));
  }

  constructor(
    private router: Router,
    private contactService: ContactService,
    private route: ActivatedRoute
  ) {}

  id = this.route.snapshot.params.id;

  updateContact() {
    this.contactService
      .updateContact(this.id, this.contact)
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['/']);
      });
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
