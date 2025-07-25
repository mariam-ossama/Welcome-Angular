import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  navbarPadding():void {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > 0) {
        //this.navbar.nativeElement.classList.add('scrolled');
      } else {
        //this.navbar.nativeElement.classList.remove('scrolled');
      }
    });
  }
}
