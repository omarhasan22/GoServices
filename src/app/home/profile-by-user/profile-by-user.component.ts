import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService, AlertService } from '@app/_services';
import { environment } from '@environments/environment';
import { first } from 'rxjs';

@Component({
  selector: 'app-profile-by-user',
  templateUrl: './profile-by-user.component.html',
  styleUrls: ['./profile-by-user.component.css']
})
export class ProfileByUserComponent implements OnInit {
  form!: FormGroup;
  account?: any;
  req?: any;
  id!: string;
  submitting = false;
  submitted = false;
  Useraccount = this.accountService.accountValue;

  public isDivVisible: boolean = false;


  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService
    ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['_id'];
      });
      console.log("from profileComp")
   
      this.accountService.getById(this.id)
      .pipe(first())
      .subscribe(account =>
        this.account = account
        );

        this.form = this.formBuilder.group({
          description: ['', [Validators.required, ]],
          date: ['', Validators.required],
          time: ['', Validators.required],
          User_id:[''],
          phone:[''],
          User_Name:[''],
          User_Adrs:[''],
          Provider_id:[''],
          accepted:[false]

      });

      this.form.patchValue({'User_id':this.Useraccount?.id})
      this.form.patchValue({'Provider_id':this.id})
      this.form.patchValue({'User_Name':this.Useraccount?.firstName})
      this.form.patchValue({'User_Adrs':this.Useraccount?.address})
      this.form.patchValue({'phone':this.Useraccount?.phone})
      
  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

   // stop here if form is invalid
    // if (this.form.invalid) {
    //     console.log("invalid form")
    //     return;
    // }

    this.submitting = true;
    this.accountService.sendReq(this.form.value)
        .pipe(first())
        .subscribe({
            next: () => {
                this.alertService.success('req successful sended', { keepAfterRouteChange: true });
               // console.log(`${environment.apiUrl}/Profile/${this.id}`)
              // this.router.navigate(['../'], { relativeTo: this.activatedRoute });
              this.isDivVisible = true;
            },
            error: error => {
                this.alertService.error(error);
                this.submitting = true;
            }
        });
}




}
