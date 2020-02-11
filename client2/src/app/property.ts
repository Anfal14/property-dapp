import { RequestStatus } from './request-status';
import { DataItem } from './data-item';

export class Property implements DataItem {

  fromJSON(json: string): void {
    const o = JSON.parse(json);
    this.hash = o.hash;
    this.state = o.state;
    this.district = o.district;
    this.village = o.village;
    this.surveyNumber = o.surveyNumber;
    this.ownerAddress = o.ownerAddress;

    this.marketValue = o.marketValue;
    this.isAvailable = o.isAvailable;
    this.priceByOwner = o.priceByOwner;

    this.requesterAddress = o.requesterAddress;
    this.priceByRequester = o.priceByRequester;

    this.requestStatusByOwner = o.requestStatusByOwner;
    this.requestStatusByAdmin = o.requestStatusByAdmin;
    //
  }

  public constructor(
    public hash?: string,
    public state?: string,
    public district?: string,
    public village?: string,
    public surveyNumber?: number,
    public ownerAddress?: string,

    public marketValue?: number,
    public isAvailable?: boolean,
    public priceByOwner?: number,

    public requesterAddress?: string,
    public priceByRequester?: number,

    public requestStatusByOwner?: RequestStatus,
    public requestStatusByAdmin?: RequestStatus) {
  }

}
