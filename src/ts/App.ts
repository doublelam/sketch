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
    });
    Events.sketchStartEve(rawContxt, finalContxt);
    Events.fromOutside();
  };
}



const main = new Main();
main.run()
