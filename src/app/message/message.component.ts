import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  nme
  mail
  mess
  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
      console.log(params)
    this.nme = params.name
    console.log(this.nme),
    this.mail = params.email
    console.log(this.mail)
    this.mess = params.message
    console.log(this.mess)
  })
  }
  onClick(){
    this.router.navigateByUrl("")
  }
}
