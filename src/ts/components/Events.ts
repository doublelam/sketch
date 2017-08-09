import { fileInput, sketchBtn } from './GetDom';
import { getPixelsFromCanvas } from './getPixelsFromCanvas';
import { $worker } from '../utils/Worker';
import { sketchPics } from '../components/domOperate';
import { setStyleFromDom } from './setFromDom';
import { styleConfig } from './styleConfig';
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
      let width: number = styleConfig.getWidth();
      let color: string = styleConfig.getColor();
      let levels: number[] = styleConfig.getLevels();
      let range: number[] = styleConfig.getRange();
      let velocity: number = styleConfig.getVelocity();
      sketchPics(rawCtx, sketchCtx, width, color, levels, range, velocity);
    }
  }

  static fromOutside() {
    setStyleFromDom.run();
  }


}