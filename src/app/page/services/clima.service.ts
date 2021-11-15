import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const apiKey = "e723e4c4614b659f25b3e4afc0fdc03f";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  getWeatherFromApi(city: string) {
    return this.httpClient.get(
      `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`
    );
  }
}
