import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {
  fname
  dep
  idnumber
  todest
  ftype
  fromdest
  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
      console.log(params)
    this.fname = params.fullname
    console.log(this.fname),
    this.dep = params.depature
    console.log(this.dep)
    this.idnumber = params.id
    console.log(this.idnumber)
    this.todest = params.to
    console.log(this.todest)
    this.ftype = params.flight
    console.log(this.ftype)
    this.fromdest = params.from
    console.log(this.fromdest)
  })
  }
  onClick(){
    this.router.navigateByUrl("")
  }

}
