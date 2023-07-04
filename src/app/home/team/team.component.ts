import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  

  @Input() teamMembers: Array<{
    teamMembers: string,
    name: string,
    role: string,
    image: string,
    twitter?: string,
    facebook?: string,
    instagram?: string,
    linkedin?: string
  }> = [];

  @Output() memberClicked: EventEmitter<{
    name: string,
    role: string,
    image: string,
    twitter?: string,
    facebook?: string,
    instagram?: string,
    linkedin?: string
  }> = new EventEmitter();
  
  

  constructor() { }

  ngOnInit(): void {
  }

}
