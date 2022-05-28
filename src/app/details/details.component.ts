import { Component, OnInit } from '@angular/core';
import { LogDetail } from '../models/info-speed.model';
import { InfoSpeedService } from '../services/info-speed-test.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  logDetail : LogDetail= {
    duration:'',
    request:'',
    requestTime:'',
    response:'',
    responseTime:''
  };
  id:string="";
  request = {};
  response:any;

  data = {
    'simple key': 'simple value',
    'numbers': 1234567,
    'simple list': ['value1', 22222, 'value3'],
    'special value': undefined,
    'owner': null,
    'simple obect': {
      'simple key': 'simple value',
      'numbers': 1234567,
      'simple list': ['value1', 22222, 'value3'],
      'simple obect': {
        'key1': 'value1',
        'key2': 22222,
        'key3': 'value3'
      }
    }
  };

  constructor(private service: InfoSpeedService) { }

  ngOnInit(): void {

  }

  Search(): void{
    debugger;
    this.service.GetLogDetailsById(this.id).subscribe(res =>{
      this.logDetail = res.data;
      this.request= JSON.parse(res.data.request);
      this.response =res.data.response;
    });
  }

  

}
