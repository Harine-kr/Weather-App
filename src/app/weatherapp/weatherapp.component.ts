import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WeatherData } from '../weatherModel/model';


@Component({
  selector: 'app-weatherapp',
  templateUrl: './weatherapp.component.html',
  styleUrls: ['./weatherapp.component.css']
})
export class WeatherappComponent implements OnInit {
  
  constructor(private weatherService:WeatherService){

}
cityName: string = "Alaska";
cityDisplayName: string = "Alaska";
weatherData?: WeatherData;

ngOnInit(): void {
  this.getWeatherData(this.cityName);
  this.cityName= " ";
}
onSubmit(){
  this.getWeatherData(this.cityName);
  this.cityDisplayName = this.cityName;
  this.cityName= " ";
}

private getWeatherData(cityName:string){
  this.weatherService.getWeatherData(cityName)
  .subscribe({
    next:(response)=>{
      this.weatherData = response
      console.log(response);
      console.log(response.temp)
    }
  });
}

}
