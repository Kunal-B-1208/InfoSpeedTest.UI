import { Status } from "../enums/data.enums";

export class SummaryResponse{
    public status : Status;
    public message : string;
    public data : Summary[]
}

export class Summary{
    public apiId : string;
    public count : number;
}

export class LogDetailResponse{
    public status : Status;
    public message : string;
    public data: LogDetail
}

export class LogDetail{
    public requestTime : string;
    public responseTime : string;
    public request : string;
    public response : string;
    public duration : string;
}
 
