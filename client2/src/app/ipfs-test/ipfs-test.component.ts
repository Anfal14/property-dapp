import { Component, OnInit } from '@angular/core';
//import { IpfsUtil } from '../ipfs-util';

@Component({
  selector: 'app-ipfs-test',
  templateUrl: './ipfs-test.component.html',
  styleUrls: ['./ipfs-test.component.css']
})
export class IpfsTestComponent implements OnInit {

  public ipfs;

  constructor() {
  }

  ngOnInit() {

  }

  async test() {
    // console.log('adding file');


    // const hash = await IpfsUtil.saveDatItem(gii);
    // console.log('hash', hash);

    // const hash2 = await IpfsUtil.saveDatItem(tii);
    // console.log('hash', hash);

    // const gio = await IpfsUtil.loadDataItem(hash, 'generate-item');
    // console.log(gio);

    // const tio = await IpfsUtil.loadDataItem(hash2 , 'transfer-item');
    // console.log(tio);





    // const data = await IpfsUtil.getFile(hash);
    // console.log('data', data.toString());

    // const gi = IpfsUtil.getFile(hash);
    // console.log('data', new GenerateItem());

    // const ti = IpfsUtil.getFile(hash);
    // console.log('data', new TransferItem());



  }


  // async test2(ipfs) {
  //   console.log('ipfs', ipfs);
  //   console.log(ipfs);


  //   console.log('data', data.toString());

  // }



}
