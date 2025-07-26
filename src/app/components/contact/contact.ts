import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule ],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
name:string = '';
age?:number;
email:string = '';
password:string = '';
}
