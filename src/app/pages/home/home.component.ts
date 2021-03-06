import { Component, OnInit } from '@angular/core';
import { FbService } from 'src/app/service/fb/fb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cities;

  constructor(public fb: FbService) { }

  ngOnInit(): void {
    this.cities = this.fb.getCities();
  }

}
