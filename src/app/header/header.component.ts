import { Component } from '@angular/core';
import { Account, Role } from '@app/_models';
import { AccountService } from '@app/_services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // You can add any logic or data properties here if needed
  account?: Account | null;
  Role = Role;

  constructor(private accountService: AccountService) {
      this.accountService.account.subscribe(x => this.account = x);
  }

  logout() {
    this.accountService.logout();
}
}
