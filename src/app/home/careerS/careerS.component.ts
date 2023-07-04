import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '@app/_services';
import { first } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './careerS.component.html',
  styleUrls: ['./careerS.component.css']
})
export class careerS implements OnInit {
  accounts?: any;
  career?:string;

  constructor(private accountService: AccountService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.career = params['career'];
      });
      console.log("from profileComp")
  console.log(this.career)
      this.accountService.getAllCareerN(this.career)
      .pipe(first())
      .subscribe(account =>
        this.accounts = account
        );
  }

}
