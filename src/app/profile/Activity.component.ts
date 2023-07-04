import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account ,Role, req  } from '@app/_models';

import { AccountService } from '@app/_services';
import { Observable, first, timer } from 'rxjs';

@Component({ templateUrl: 'Activity.component.html',
            styleUrls: ['Activity.component.css'] })
export class activityComponent implements OnInit {
   // account = this.accountService.accountValue;
   acceptedAccountes?: req | null;
   pendingAccountes?:any;
   pendingAccountesU?:any;
   account = this.accountService.accountValue;

   status=true;



    constructor(private accountService: AccountService,private activatedRoute: ActivatedRoute) { }
   
    ngOnInit() {

        
        this.accountService.pendingReq(this.account?.id)
        .pipe(first())
        .subscribe((account)  =>
          this.pendingAccountes = account
        );
        

        this.accountService.getById(this.account?.id)
        .pipe(first())
        .subscribe((account)  =>
          this.pendingAccountesU = account
        );
        
      

    }

    clickEvent(){
        timer(1000).toPromise().then(res => {
            this.status=false;  
      })
        


        }


}