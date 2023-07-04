import { Component, OnInit ,Input} from '@angular/core';
import { Role } from '@app/_models';
import { AccountService } from '@app/_services';
import { first } from 'rxjs';

@Component({
  selector: 'app-sev',
  templateUrl: './sev.component.html',
  styleUrls: ['./sev.component.scss']
})
export class SevComponent implements OnInit  {
  accounts?: any;
  careersN?: any;
  resultString:any
    constructor(private accountService: AccountService) { }

    ngOnInit() {
      // console.log("from sev.ts")
        this.accountService.getAllCareer()
            .pipe(first())
            .subscribe((account)  =>
              this.accounts = account
            );

            
            //  this.accountService.getAllCareer()
            //  .pipe(first())
            //  .subscribe((result) => {
            //   const resultString = JSON.stringify(result);
            //   console.log(resultString);
            // });


             
// console.log("Accounts from sev.ts")
// console.log(this.resultString)

          // this.careersN = this.accountService.getAllCareerN(this.accounts)
     
          
              // this.accountService.getAllCareerN(this.accounts)
              // .pipe(first())
              // .subscribe(accounts => 
              //   this.careersN = accounts
                
              //   );
             

    }

   
    

}




