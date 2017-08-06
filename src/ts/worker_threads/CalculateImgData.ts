import { transformToGray, resetIntArray, relayoutArr } from '../utils/processArray';
import { logBlue, logGreen, logRed } from '../utils/consolelog';
import { generateExecutive } from '../components/generateExecutive';
const _self: any = self;
_self.location.reload = val => { console.log('worker reload') }
/* from purescript */
// const reorderArr: any = require('../../purescripts/reorderImgArr.purs');
// const mathPure:any = require('../../purescripts/utils/mathematics.purs');
/* from purescript */
class WorkerProcess {
  constructor() {
    logBlue('NEW THREAD:worker constructor');
  }

  reorderImgArr(data: Uint8Array) {
    // return reorderArr.reorderImgArr(data);
  }

  transformToGray(
    data: Uint8Array,
    width: number = 300,
    gap: number = 5,
    rangeArr: number[] = [0, 85, 177, 255]
  ): any {
    const rsult = relayoutArr(data, width, gap, Uint8Array.from(rangeArr));
    const _output_rslt = {
      data: rsult,
      exeCom: generateExecutive(rsult.conjArray,gap,width)
    }
    return _output_rslt;
  }
}

const workerProcess = new WorkerProcess();

_self.onmessage = data => {
  const exeName = data.data.exeFunc;
  const infoData = data.data.infoData;
  const newdData: Uint8Array[] = workerProcess[exeName](...infoData);
  _self.postMessage(newdData);
}
