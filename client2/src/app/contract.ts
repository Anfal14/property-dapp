import { RequestStatus } from './request-status';
import { Property } from './property';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { async } from 'q';

@Injectable({ providedIn: 'root' })
export class Contract {

  private SERVICE_URL = "http://localhost:8084/service";
  private CONTACT_ADDRESS = "0xaa";
  //declare var JSEncrypt: any;

  constructor(private http: HttpClient) {
    // console.log('this.JSEncrypt', this.JSEncrypt);
  }

  public async postRequest(type: string, command: string, params: any[]) {
    const sign = '';
    const sender = '';
    return await this.http.post(this.SERVICE_URL, {
      type,
      command,
      params,
      sender,
      sign
    });
  }

  public async addAdmin(admin: string, village: string) {
    return await this.postRequest('update', 'ADDADMIN', [village, admin]);
  }

  public async getAdmin(village: string) {
    return await this.postRequest('query', 'GETADMIN', [village]);
  }

  public async registration(state: string, district: string, village: string, surveyNumber: number,
    ownerAddress: string, marketValue: number): Promise<any> {

    return await this.postRequest('update', 'ADDPROPERTY', [state, district, village, surveyNumber, ownerAddress, marketValue]);
  }

  public async viewProperty(surveyNumber: number): Promise<any> {
    return await this.postRequest('query', 'VIEWPROPERTY', [surveyNumber]);
  }

  public async requestToOwner(surveyNumber: number): Promise<any> {
    return await this.postRequest('update', 'REQTOOWNER', [surveyNumber]);
  }

  public async viewRequest(surveyNumber: number): Promise<any> {
    return await this.postRequest('query', 'VIEWREQUEST', [surveyNumber]);
  }

  public async makeAvailable(surveyNumber: number) {
    return await this.postRequest('update', 'MAKEAVAILABLE', [surveyNumber]);
  }

  public async RSByOwner(surveyNumber: number, status: String) {
    return await this.postRequest('update', 'RSBYOWNER', [surveyNumber, status]);
  }

  public async RSByAdmin(surveyNumber: number, status: number) {
    return await this.postRequest('update', 'RSBYADMIN', [surveyNumber, status]);
  }

  public async buyProperty(surveyNumber: number) {
    return await this.postRequest('update', 'BUYPROPERTY', [surveyNumber]);
  }


}


