import { Component, OnInit, Input } from '@angular/core';
import { UserContact } from '../share/usercontact.model';
import { UsercontactService } from '../share/usercontact.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-usercontact',
    templateUrl: './usercontact.component.html',
    styleUrls: ['./usercontact.component.css'],
})

export class UsercontactComponent implements OnInit {
    @Input() childMessage: string; // getting data parent to child coponent
    usercontacts: UserContact[]; // Array<string>
    usercont: UserContact;
    showGreeting = false;
    constructor(private ucs: UsercontactService, private router: Router) {
    }

    editUserContact(usercontact: UserContact) {
        localStorage.removeItem('editUserId');
        localStorage.setItem('editUserId', usercontact.id.toString());
        this.router.navigate(['edit']);
    }

    deleteUserContact(usercontact: UserContact) {
        console.log(usercontact);
        this.ucs.delete(usercontact);
    }
    

    ngOnInit() {
        this.usercontacts = this.ucs.getall();
    }
}