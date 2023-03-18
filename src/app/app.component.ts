import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './weatherModel/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }

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
