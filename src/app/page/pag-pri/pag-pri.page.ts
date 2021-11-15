import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../services/clima.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Storage } from "@ionic/storage";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: 'app-pag-pri',
  templateUrl: './pag-pri.page.html',
  styleUrls: ['./pag-pri.page.scss'],
})

export class PagPriPage implements OnInit {

  constructor(private LoadingCtrl: LoadingController,
    private weatherService: WeatherService,
		private storage: Storage
    ) { }
  
  public weatherForm = new FormGroup({
		city: new FormControl("", Validators.required),
	});
	public weather: Object;
	public city: string;

	search(formData: FormData) {
		console.log(formData);
		this.storage.set("city", formData["city"]);

		this.weatherService
			.getWeatherFromApi(formData["city"])
			.subscribe((weather) => {
				this.weather = weather;
				console.log(weather);
			});
	}

	getWeather() {
		this.storage
			.get("city")
			.then((city) => {
				if (city === null) {
					this.weatherService
						.getWeatherFromApi("madrid")
						.subscribe((weather) => {
							this.weather = weather;
							console.log("weather from madrid, storage empty", weather);
						});
				} else {
					this.weatherService.getWeatherFromApi(city).subscribe((weather) => {
						this.weather = weather;
						console.log(weather);
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}
	async ngOnInit() {
    await this.storage.create();
		this.getWeather();
	}

  //ANIMACION DE CARGA 
  
  async presentLoading() {
    const loading = await this.LoadingCtrl.create({
      message: 'Cargando...',
      duration: 100,
      backdropDismiss: false,
    });
    
    await loading.present();

  }

}
