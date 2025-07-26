import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {
  images: string[] = [
    // "/images/portfolio/poert1.png",
    // "/images/portfolio/port2.png",
    // "/images/portfolio/port3.png",
    // "/images/portfolio/poert1.png",
    // "/images/portfolio/port2.png",
    // "/images/portfolio/port3.png"
  ]
  selectedImage: string = '';

  displayImg(img: string): void {
    this.selectedImage = img;
  }
}
