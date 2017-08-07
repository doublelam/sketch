///<reference path="d.tss/preLoad.d.ts"/>
import {
  canvasRaw,
  rawContxt,
  // canvasReDraw,
  // redrawContxt,
  finalContxt
} from '../ts/components/GetDom';
import { getPixelsFromCanvas } from './components/getPixelsFromCanvas';
import { $worker } from './utils/Worker';
import { drawLines } from './components/drawLines';
import { generateExecutive } from './components/generateExecutive';
import { Events } from './components/Events';
import { drawCanvas } from './components/domOperate';
/* css resource */
require('../sass/index.sass');
require('font-awesome/scss/font-awesome.scss');
/* ----------- */

/* require from purescript */

/* ---------- */
/* ---------------------------import------------------------------------ */

export class Main {
  run() {
    Events.fileInputEve((e: Event) => {
      drawCanvas(rawContxt,(<any>e).target.result)
    })
    Events.sketchStartEve(rawContxt, finalContxt)
    // let img = new Image();
    // img.onload = () => {
    //   this.redrawGrayImg(img, 0, 0, 300, 300)
    // }
    // img.src = require('../images/10-dithering-opt.jpg');
  };

  redrawGrayImg(img: HTMLImageElement, fromX: number, fromY: number, width: number, height: number) {
    rawContxt.drawImage(img, fromX, fromY, width, height);
    const imageData = getPixelsFromCanvas(rawContxt, fromX, fromY);
    console.log('img data', imageData)
    // const worker = $worker({
    //   do: 'js/img_calc.js',
    //   message: data => {
    //     console.log('data', data.data);
    //     const imgData = rawContxt.createImageData(width, height);
    //     data.data.UintArray.map((v, i) => {
    //       imgData.data[i] = v
    //     })
    //     // redrawContxt.putImageData(imgData, fromX, fromY)
    //     console.log('pixePoints', data.data.pixelPoints);
    //     // drawLines(finalContxt, generateExecutive(data.data.conjArray, 3, width))
    //   },
    //   error: err => {
    //     console.log('err', err)
    //   }
    // });
    // worker.emit({ exeFunc: 'transformToGray', infoData: imageData.data });

  }

}



const main = new Main();
main.run()
