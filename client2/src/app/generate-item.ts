import { DataItem } from './data-item';
///import { jsonIgnore, jsonIgnoreReplacer } from 'json-ignore';

export class GenerateItem implements DataItem {

  public constructor(
    public qrcode?: string,
    public productname?: string,
    public qty?: number,
    public rate?: number,
    public date?: string
  ) {
  }

  fromJSON(json: string): void {
    const o = JSON.parse(json);
    this.qrcode = o.qrcode;
    this.productname = o.productname;
    this.qty = o.qty;
    this.rate = o.rate;
    this.date = o.date;
  }

}
