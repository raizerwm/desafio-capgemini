import { Injectable } from '@angular/core';
import { Usercontact } from './usercontact.model';


@Injectable({
  providedIn: 'root'
})
export class UsercontactService {

  usercontacts: Usercontact[] = [{
    id: 0,
    firstname: 'Alex',
    lastname: 'BlaBla',
    email: 'alex.blabla@aol.at'
  },
  {
    id: 1,
    firstname: 'Otto',
    lastname: 'Blubb',
    email: 'otto.blubb@dsl.de'
  },
  {
    id: 2,
    firstname: 'Peter',
    lastname: 'Pan',
    email: 'peter.pan@neverland.com'
  }];

  create(usercontact: Usercontact) {
    const itemIndex = this.usercontacts.length;
    usercontact.id = this.getnextId();
    console.log(usercontact);
    this.usercontacts[itemIndex] = usercontact;
  }

  delete(usercontact: Usercontact) {
    this.usercontacts.splice(this.usercontacts.indexOf(usercontact), 1);
  }

  update(usercontact: Usercontact) {
    const itemIndex = this.usercontacts.findIndex(item => item.id === usercontact.id);
    console.log(itemIndex);
    this.usercontacts[itemIndex] = usercontact;
  }

  getall(): Usercontact[] {
    console.log('usercontactservice:getall');
    console.log(this.usercontacts);
    return this.usercontacts;
  }

  reorderUsercontacts(usercontact: Usercontact) {
    console.log('Zur Info:', usercontact);
    this.usercontacts = this.usercontacts
      .map(uc => uc.id === usercontact.id ? usercontact : uc)
      .sort((a, uc) => uc.id - uc.id);
  }

  getUserById(id: number) {
    console.log(id);
    const itemIndex = this.usercontacts.findIndex(item => item.id === id);
    console.log(itemIndex);
    return this.usercontacts[itemIndex];
  }

  getnextId(): number {
    let highest = 0;
    this.usercontacts.forEach(function (item) {
      if (highest === 0) {
        highest = item.id;
      }
      if (highest < item.id) {
        highest = item.id;
      }
    });
    return highest + 1;
  }
}
