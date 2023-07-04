import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService, AlertService } from '@app/_services';
import { MustMatch } from '@app/_helpers';
import { Career, Role } from '@app/_models';



@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {
    form!: FormGroup;
    role?:Role;
    submitting = false;
    submitted = false;
    
    
     careers = Object.keys(Career).map(key => key);
    
     
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.role = this.route.snapshot.params['role'];
        
        this.form = this.formBuilder.group({
            title: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            address : ['', Validators.required],
            role: ['', Validators.required],
            career: ['', Validators.required],
            phone: ['', Validators.required, Validators.minLength(8), Validators.maxLength(8) ],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            acceptTerms: [false, Validators.requiredTrue],
            isProvider:[false, Validators.requiredTrue]

        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
        // if(this.isProvider){ console.log("Provider")}
        // else console.log("NOt")
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    

    isProvider=false;
    isUser=false;
	selectedTeam = '';
    @ViewChild('teams') teams!: ElementRef;
	onSelected():void {
		this.selectedTeam = this.teams.nativeElement.value;
             if(this.selectedTeam=="Provider"){
                this.isProvider=true
                this.isUser=false
                
            }
        if(this.selectedTeam=="User"){
            this.isProvider=false
           this.isUser=true
    
        }
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
        this.accountService.register(this.form.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.alertService.success('Registration successful, please check your email for verification instructions', { keepAfterRouteChange: true });
                    this.router.navigate(['../login'], { relativeTo: this.route });
                },
                error: error => {
                    this.alertService.error(error);
                    this.submitting = false;
                }
            });
    }
}