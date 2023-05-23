import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit{
  isHighlighted: boolean;
  isBold: boolean;
  isItalic: boolean;

  constructor(){
    this.isHighlighted = true;
    this.isBold = true;
    this.isItalic = true;
  }
  ngOnInit(): void {
    
  }

}
