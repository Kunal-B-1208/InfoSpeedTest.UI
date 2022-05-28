import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LogDetailResponse, SummaryResponse } from '../models/info-speed.model';

@Injectable({
    providedIn: 'root',
})

export class InfoSpeedService {

   private apiUrl: string= 'http://localhost:5000/';
   private getLogDetailsById: string = 'api/DataLog/Details?id=';
   private getLogSummary: string = 'api/DataLog/Summary';

    constructor(private httpClient : HttpClient){

    }

    public GetSummary(){
        var url = this.apiUrl + this.getLogSummary;
        return this.httpClient.get<SummaryResponse>(url);
    }

    public GetLogDetailsById(id: string){
        var url = this.apiUrl + this.getLogDetailsById + id;
        return this.httpClient.get<LogDetailResponse>(url);
    }
}