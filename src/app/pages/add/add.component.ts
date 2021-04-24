import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { FbService } from 'src/app/service/fb/fb.service';
import { WeatherService } from 'src/app/service/weather/weather.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit, OnDestroy {

  temp: number;
  city = 'Paris';
  state: string;
  capitals = [];
  selectedCity;
  cardCity;
  showNote = false;
  followedCM = false;
  sub1;
  today = new Date(Date.now()).toLocaleDateString('en-RU', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' });

  constructor(public http: HttpClient, public weather: WeatherService, public fb: FbService) { }

  ngOnInit(): void {
    
    this.weather.getWeather(this.city).subscribe((payload: any) => {
      this.state = payload.weather[0].main;
      this.temp = Math.ceil(Number(payload.main.temp));
    });

    this.http.get('https://restcountries.eu/rest/v2/all')
    .pipe(first())
    .subscribe((countries: Array<any>) => {
      countries.forEach((country: any) => {
        if (country.capital.length) {
          this.capitals.push(country.capital);
        }
      });
      this.capitals.sort();
    });

    this.sub1 = this.fb.getCities().subscribe(cities => {
      Object.values(cities).forEach((city: any) => {
        if (city.name === 'Paris') {
          this.followedCM = true;
        }
      });
    });
  }

  selectCity(city) {
    if (this.capitals.includes(city)) {
      this.cardCity = city;
      this.showNote = false;
    } else if (city.leading > 0) {
      this.showNote = true;
    }
  }

  addCityOfTheMonth() {
    this.fb.addCity('Paris').subscribe(() => this.followedCM = true);
  }

  ngOnDestroy(): void {
    this.sub1.unsubscribe();
  }

}
