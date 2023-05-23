import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  //declare
  product: any[];
  textColor: string;
  textFont: string;
  fontSize: number;

  //initialize
  constructor(){
    this.product = [
      {
        productName: "wireless headphones",
        productDesc: "Enjoy your favorite tunes without the hassle of cords with the TechWave wireless headphones. These Bluetooth-enabled headphones offer high-quality sound and up to 10 hours of battery life."
      },
      {
        productName: "yoga mat",
        productDesc: "Take your yoga practice to the next level with the SwiftFit yoga mat. This eco-friendly mat is made of natural rubber and features a non-slip surface to help you stay balanced during your poses."
      },
      {
        productName: "water bottle",
        productDesc: "Stay hydrated on-the-go with the AquaMate water bottle. This reusable bottle is made of BPA-free materials and features a leak-proof cap, making it perfect for outdoor adventures or your daily commute."
      }
    ]

    this.textColor = 'red';
    this.textFont = 'monospace';
    this.fontSize = 16;
  }

  userCase = prompt("Select product: \nWireless Headphones, Yoga Mat, Water Bottle")

  //method
  public getProduct(){
    return this.product;
  }
  ngOnInit(): void {
    
  }
}
