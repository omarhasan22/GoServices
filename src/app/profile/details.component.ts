import { Component } from '@angular/core';
import { Account ,Role  } from '@app/_models';

import { AccountService } from '@app/_services';

@Component({ templateUrl: 'details.component.html',
            styleUrls: ['details.component.css'] })
export class DetailsComponent {
   // account = this.accountService.accountValue;
   Role = Role;
   role:any;
   account?: Account | null;

    constructor(private accountService: AccountService) {
        this.accountService.account.subscribe(x => this.account = x);
        this.role=this.account?.role;
     }
}