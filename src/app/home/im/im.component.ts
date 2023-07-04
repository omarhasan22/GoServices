import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-im',
  templateUrl: './im.component.html',
  styleUrls: ['./im.component.css']
})
export class ImComponent {
@Input() title:string='';
@Input() img:string='';
@Input() cardText:string='';
}
