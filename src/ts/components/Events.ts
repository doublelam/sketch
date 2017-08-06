import { fileInput, sketchBtn } from './GetDom';
import { getPixelsFromCanvas } from './getPixelsFromCanvas';
import { $worker } from '../utils/Worker';
import { sketchPics } from '../components/domOperate';
export class Events {
  static fileInputEve(callback: Function = (e) => {
    console.log('%cINITIAL FILE ONCHANGE CALLBACK', 'color: blue')
  }): Events {
    const reader = new FileReader();
    fileInput.onchange = (eve: Event) => {
      if (!(<any>eve).target.files[0]) {
        console.warn('SELECTING IMAGE CANCLED')
        return;
      }
      reader.onload = (e: Event) => {
        callback(e);
      }
      reader.readAsDataURL((<any>eve).target.files[0]);
    }
    return;
  }

  static sketchStartEve(
    rawCtx: CanvasRenderingContext2D,
    sketchCtx: CanvasRenderingContext2D = rawCtx
  ) {
    sketchBtn.onclick = (e: Event) => {
      sketchPics(rawCtx, sketchCtx);
    }
  }
}