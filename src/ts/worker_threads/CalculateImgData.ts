const _self: any = self;
_self.location.reload = val => { console.log('worker reload') }
/* from purescript */
const reorderArr: any = require('../../purescripts/reorderImgArr.purs');
// const mathPure:any = require('../../purescripts/utils/mathematics.purs');
/* from purescript */
class WorkerProcess {
  constructor() {
    console.log('___worker constructor___');
  }

  reorderImgArr(data: Int8Array) {
    // return reorderArr.reorderImgArr(data);
  }

  transformToGray(data: Int8Array): Int8Array {
    return reorderArr.transformToGray(data);
    // console.log('mathpure',mathPure.closest(53)([22,34,56,67,9879,54]))
    // return mathPure.closest(30)([22,34,56,67,9879,54])
  }
}

const workerProcess = new WorkerProcess();

_self.onmessage = data => {
  const exeName = data.data.exeFunc;
  const infoData = data.data.infoData;
  const newdData: Int8Array[] = workerProcess[exeName](infoData);
  _self.postMessage(newdData);
}
