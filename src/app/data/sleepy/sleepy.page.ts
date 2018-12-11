import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { OvernightSleepData } from '.././overnight-sleep-data';
import { StanfordSleepinessData } from '.././stanford-sleepiness-data';
import { SleepService } from '../../services/sleep.service';

@Component({
  selector: 'app-sleepy',
  templateUrl: './sleepy.page.html',
  styleUrls: ['./sleepy.page.scss'],
})
export class SleepyPage implements OnInit {
	sleepiness: number;
	
  constructor(public sleepService:SleepService, public navCtrl: NavController) { }

  ngOnInit() {
  }
  select(item)
  {
	  this.sleepiness = item
  }
  submit()
  {
	//check if an option was selected
	if(this.sleepiness)
	{
		this.sleepService.logSleepinessData(new StanfordSleepinessData(this.sleepiness, new Date()));
		this.navCtrl.goBack();
	}
	else
	{	
		alert("Please choose an option");
	}
  }
  
  back()
  {
	this.navCtrl.goBack();
  }
}
