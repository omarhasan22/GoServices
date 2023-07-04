import { Component } from '@angular/core';
import { AccountService } from '@app/_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  account = this.accountService.accountValue;

  constructor(private accountService: AccountService) { }
}
