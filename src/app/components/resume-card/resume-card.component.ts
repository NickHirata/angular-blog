import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-card',
  templateUrl: './resume-card.component.html',
  styleUrls: ['./resume-card.component.css']
})
export class ResumeCardComponent implements OnInit {
  @Input()
  cardTittle:string = ""

  @Input()
  cardParagraph:string=""
  constructor() { }

  ngOnInit(): void {
  }

}
