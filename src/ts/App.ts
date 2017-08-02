///<reference path="d.tss/preLoad.d.ts"/>
import {
  canvasRaw,
  rawContxt,
  canvasReDraw,
  redrawContxt
} from '../ts/components/GetDom';
import { getPixelsFromCanvas } from './components/getPixelsFromCanvas';
import { $worker } from './utils/Worker';

/* css resource */
require('../sass/index.sass');
/* ----------- */

/* require from purescript */

/* ---------- */
/* ---------------------------import------------------------------------ */

export class Main {
  run() {
    let img = new Image();
    img.onload = () => {
      this.redrawGrayImg(img, 20, 20, 50, 50)
    }
    img.src = require('../images/10-dithering-opt.jpg');
  };

  redrawGrayImg(img: HTMLImageElement, fromX: number, fromY: number, width: number, height: number) {
    rawContxt.drawImage(img, 0, 0, 100, 100);
    const imageData = getPixelsFromCanvas(rawContxt, fromX, fromY, width, height);
    console.log('img data', imageData)
    const worker = $worker({
      do: 'js/img_calc.js',
      message: data => {
        console.log('data', data.data);
        const imgData = redrawContxt.createImageData(width, height);
        data.data.map((v, i) => {
          imgData.data[i] = v
        })
        redrawContxt.putImageData(imgData, fromX, fromY)
      },
      error: err => {
        console.log('err', err)
      }
    });
    worker.emit({ exeFunc: 'transformToGray', infoData: imageData.data });
  }

}



const main = new Main();
main.run()
