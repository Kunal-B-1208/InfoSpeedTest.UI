import { Component, OnInit } from '@angular/core';
import { Status } from '../enums/data.enums';
import { Summary, SummaryResponse } from '../models/info-speed.model';
import { InfoSpeedService } from '../services/info-speed-test.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  summary: Summary[];
  constructor(private service: InfoSpeedService) { }

  ngOnInit(): void {
    this.LoadSummary();
  }

  private LoadSummary(){
    debugger;
      this.service.GetSummary().subscribe((res)=>{
        debugger;
        if(res.status == Status.Success) {
          this.summary = res.data;
        }
      });
  }

}


