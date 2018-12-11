import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { OvernightSleepData } from '.././overnight-sleep-data';
import { StanfordSleepinessData } from '.././stanford-sleepiness-data';
import { SleepService } from '../../services/sleep.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  items: OvernightSleepData[]=[];
  datas: StanfordSleepinessData[] = [];
  constructor(public sleepService:SleepService, public navCtrl: NavController) { 
	this.items = this.sleepService.returnNightData();
	this.datas = this.sleepService.returnDayData();
  }
  
   
  
  ngOnInit() {
  }
  
  back()
  {
	this.navCtrl.goBack();
  }

}
