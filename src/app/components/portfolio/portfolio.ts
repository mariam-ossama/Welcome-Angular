import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {
  //imgSrc!:string;
  displayImg(img:string): void {
    console.log(img);
  }
}
