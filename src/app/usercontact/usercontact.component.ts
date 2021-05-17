import { Component, OnInit } from '@angular/core';
import { Usercontact } from '../share/usercontact.model';
import { UsercontactService } from '../share/usercontact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usercontact',
  templateUrl: './usercontact.component.html',
  styleUrls: ['./usercontact.component.css'],
})

export class UsercontactComponent implements OnInit {

  usercontacts: Usercontact[]; // Array<string>
  usercont: Usercontact;

  constructor(private ucs: UsercontactService, private router: Router) {
  }

  editUsercontact(usercontact: Usercontact) {
    console.log(usercontact);
    localStorage.removeItem('editUserId');
    localStorage.setItem('editUserId', usercontact.id.toString());
    this.router.navigate(['edit']);
    // this.ucs.update(usercontact);
  }

  deleteUsercontact(usercontact: Usercontact) {
    console.log(usercontact);
    this.ucs.delete(usercontact);
  }

  ngOnInit() {
    console.log('usercontact:init');
    this.usercontacts = this.ucs.getall();
    console.log(this.usercontacts);
  }
}
