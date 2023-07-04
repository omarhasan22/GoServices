import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '@app/_services';
import { first } from 'rxjs';

@Component({
  selector: 'app-filter-prof',
  templateUrl: './filter-prof.component.html',
  styleUrls: ['./filter-prof.component.css']
})
export class FilterProfComponent implements OnInit {
  form!: FormGroup;
  accounts?:any;
 
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      search: [''],
     
  });
  }
  
  constructor(
    private formBuilder: FormBuilder,
    // private route: ActivatedRoute,
    // private router: Router,
    private accountService: AccountService,
    // private alertService: AlertService
) { }

get f() { return this.form.controls; }

onSubmit(){
  // console.log(this.f.search.value)
 this.accountService.searchByName(this.f.search.value)
            .pipe(first())
            .subscribe(account => 
              this.accounts = account
              );
// console.log(this.accounts)
}

}
