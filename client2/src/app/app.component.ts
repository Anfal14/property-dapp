// import { AES } from 'aes-js';
// import { SHA3 } from 'sha3';

import { Component, Inject, OnInit } from '@angular/core';
//import { IpfsUtil } from './ipfs-util';
// import { IPFS } from './ipfs';
// import { Buffer } from 'buffer';
import { Global } from 'global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent //implements OnInit
 {
  title = 'client2';

  // constructor() {
  //   window['Buffer'] = Buffer;
  //   window['Global'] = Global;

    //console.log(Buffer);
  }


 // ngOnInit() {

    // const dt = {
    //   Addresses: {
    //     Swarm: [
    //       '/ip4/18.222.18.40/udp/8080'
    //     ],
    //     API: '',
    //     Gateway: '',
    //     Delegates: []
    //   },
    //   Discovery: {
    //     MDNS: {
    //       Enabled: false,
    //       Interval: 10
    //     },
    //     webRTCStar: {
    //       Enabled: true
    //     }
    //   },
    //   Bootstrap: [
    //     '/dns4/ams-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLer265NRgSp2LA3dPaeykiS1J6DifTC88f5uVQKNAd',
    //     '/dns4/lon-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLMeWqB7YGVLJN3pNLQpmmEk35v6wYtsMGLzSr5QBU3',
    //     '/dns4/sfo-3.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLPppuBtQSGwKDZT2M73ULpjvfd3aZ6ha4oFGL1KrGM',
    //     '/dns4/sgp-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLSafTMBsPKadTEgaXctDQVcqN88CNLHXMkTNwMKPnu',
    //     '/dns4/nyc-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLueR4xBeUbY9WZ9xGUUxunbKWcrNFTDAadQJmocnWm',
    //     '/dns4/nyc-2.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLV4Bbm51jM9C4gDYZQ9Cy3U6aXMJDAbzgu2fzaDs64',
    //     '/dns4/node0.preload.ipfs.io/tcp/443/wss/ipfs/QmZMxNdpMkewiVZLMRxaNxUeZpDUb34pWjZ1kZvsd16Zic',
    //     '/dns4/node1.preload.ipfs.io/tcp/443/wss/ipfs/Qmbut9Ywz9YEDrz8ySBSgWyJk41Uvm2QJPhwDJzJyGFsD6'
    //   ],
    //   Pubsub: {
    //     Enabled: true
    //   },
    //   Swarm: {
    //     ConnMgr: {
    //       LowWater: 200,
    //       HighWater: 500
    //     }
    //   }
    // };

    // console.log('Creating ipfs object');
    // const str = 'Ipfs.create({"config":' + JSON.stringify(dt) + '})';
    // //console.log(str);
    // eval(str).then((ipfs) => {
    //   console.log('Ipfs created ', ipfs);
    //   IpfsUtil.ipfs = ipfs;
    // });

 // }

//}
