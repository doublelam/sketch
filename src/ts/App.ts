///<reference path="./d.tss/preLoad.d.ts"/>
import { oCanvas } from '../ts/components/GetDom';
import { getPixelsFromCanvas } from './components/getPixelsFromCanvas';
import { reorderImageData } from './components/reorderImageData';
/* css resource */
require('../sass/index.sass');
/* ----------- */
export class Main {
  static run() {
    let canvatxt = oCanvas.getContext('2d');
    let img = new Image();
    img.onload = () => {
      canvatxt.drawImage(img, 0, 0, 300, 300);
      // console.log(reorderImageData(getPixelsFromCanvas(canvatxt, 0, 0, 300, 300).data));
    }
    img.src = require('../images/10-dithering-opt.jpg');
    let xx: any = require('../purescripts/reorderImgArr.purs');
    // let test: any = require('../purescripts/test.purs');
    // let hs:any = require('../haskell/test.hs');
    // console.log('xx', xx.reorderImgArr(getPixelsFromCanvas(canvatxt, 0, 0, 300, 300).data))
    // console.log('test', test.test)
    // console.log('hs',hs)
  };
}



Main.run()
