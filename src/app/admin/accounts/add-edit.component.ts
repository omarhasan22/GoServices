﻿import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService, AlertService } from '@app/_services';
import { MustMatch } from '@app/_helpers';
import { Career, Role } from '@app/_models';

@Component({ templateUrl: 'add-edit.component.html' })
export class AddEditComponent implements OnInit {
    form!: FormGroup;
    id?: string;
    title!: string;
    role?:Role;
    loading = false;
    submitting = false;
    submitted = false;
    careers = Object.keys(Career).map(key => key);
    isProvider=false;
	selectedTeam = '';


    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService
    ) { }


    
    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.role = this.route.snapshot.params['role'];
        this.form = this.formBuilder.group({
            title: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            career: ['' ,(!this.role?.includes(Role.Provider) ? [Validators.required] : [])],
            email: ['', [Validators.required, Validators.email]],
            role: ['', Validators.required],
            // password only required in add mode
            password: ['', [Validators.minLength(6), ...(!this.id ? [Validators.required] : [])]],
            confirmPassword: ['']
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });

        this.title = 'Create Account';
        if (this.id) {
            // edit mode
            this.title = 'Edit Account';
            this.loading = true;
            this.accountService.getById(this.id)
                .pipe(first())
                .subscribe(x => {
                    this.form.patchValue(x);
                    this.loading = false;
                });
        }
    }


    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }


    @ViewChild('teams') teams!: ElementRef;
	onSelected():void {
		this.selectedTeam = this.teams.nativeElement.value;
             if(this.selectedTeam=="Provider"){this.isProvider=true}
        if(this.selectedTeam=="User"){this.isProvider=false}
	}

   

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.submitting = true;

        // create or update account based on id param
        let saveAccount;
        let message: string;
        if (this.id) {
            saveAccount = () => this.accountService.update(this.id!, this.form.value);
            message = 'Account updated';
        } else {
            saveAccount = () => this.accountService.create(this.form.value);
            message = 'Account created';
        }

        saveAccount()
            .pipe(first())
            .subscribe({
                next: () => {
                    this.alertService.success(message, { keepAfterRouteChange: true });
                    this.router.navigateByUrl('/admin/accounts');
                },
                error: error => {
                    this.alertService.error(error);
                    this.submitting = false;
                }
            });
    }
}