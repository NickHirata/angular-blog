import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  @Input()
  photoCover:string=""
  @Input()
  cardTittle:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
