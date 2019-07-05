import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fullname
  depature
  id
  to
  flight
  from
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onOrder(){
    this.router.navigate(['/reservations'], { queryParams: { fullname: this.fullname, depature: this.depature ,id:this.id,to:this.to,from:this.from,flight:this.flight } });
  }

}
