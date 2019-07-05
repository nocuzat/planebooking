import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name
  email
  message
  constructor(private router:Router) { }

  ngOnInit() {
  }
  onclick(){
    this.router.navigateByUrl("home")
  }
  onSubmit(){
    this.router.navigate(['/message'], { queryParams: { name: this.name, email: this.email ,message:this.message } });
  }
}
