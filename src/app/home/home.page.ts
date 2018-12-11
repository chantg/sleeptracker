import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	constructor(public sleepService:SleepService, public navCtrl: NavController) {

	}
	
	goToLogSleep()
	{
		this.navCtrl.navigateForward('/overnight-page');
	}
	
	goToLogSleepy()
	{
		this.navCtrl.navigateForward('/sleepy');
	}
	
	goToView()
	{
		this.navCtrl.navigateForward('/view');
	}
	ngOnInit() {
		console.log(this.allSleepData);
	}

	/* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
	get allSleepData() {
		return SleepService.AllSleepData;
	}
}
