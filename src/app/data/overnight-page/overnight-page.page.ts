import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SleepData } from '.././sleep-data';
import { OvernightSleepData } from '.././overnight-sleep-data';
import { StanfordSleepinessData } from '.././stanford-sleepiness-data';
import { SleepService } from '../../services/sleep.service';


@Component({
  selector: 'app-overnight-page',
  templateUrl: './overnight-page.page.html',
  styleUrls: ['./overnight-page.page.scss'],
})
export class OvernightPagePage implements OnInit {
  date: Date = new Date();
  //dates and times begin at the current time
  start: string = new Date(this.date.getTime()- (this.date.getTimezoneOffset()* 60000)).toISOString();
  wake: string = this.start;

  constructor(public sleepService:SleepService, public navCtrl: NavController) { }

  ngOnInit() {
  }
  submit()
  {
	  var realStart = new Date(this.start);
	  realStart.setHours(realStart.getHours()+8); //+8 for Pacific Standard Time
	  var realWake = new Date(this.wake);
	  realWake.setHours(realWake.getHours()+8);
	  if(realStart >= realWake)
	  {
		  alert("You must go to sleep before you wake up");
	  }
	  else
	  {
		  this.sleepService.logOvernightData(new OvernightSleepData(new Date(this.start), new Date(this.wake)));
		  this.navCtrl.goBack();
	  }
  }
  
  back()
  {
	this.navCtrl.goBack();
  }

}