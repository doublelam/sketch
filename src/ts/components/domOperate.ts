import { getPixelsFromCanvas } from './getPixelsFromCanvas';
import { $worker, Worker_ } from '../utils/Worker';
import { logBlue, logGreen, logRed } from '../utils/consolelog';
import { drawLines } from './drawLines';
export const drawCanvas = (ctx: CanvasRenderingContext2D, imgBase64: string) => {
  const img = new Image();
  img.onload = (e: Event) => {
    console.log('width', img.naturalWidth, 'height', img.naturalHeight)
    let width: number = img.naturalWidth;;
    let height: number = img.naturalHeight;
    if (width >= height && img.naturalWidth > 320) {
      logBlue('width >= height && img.naturalWidth')
      width = 320;
      height = (320 / img.naturalWidth) * img.naturalHeight
    };
    if (width < height && img.naturalHeight > 320) {
      logBlue('width < height && img.naturalWidth')
      height = 320;
      width = (320 / img.naturalHeight) * img.naturalWidth
    };
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    ctx.drawImage(img, 0, 0, width, height)
  }
  img.src = imgBase64;
}

export const sketchPics = (
  rawCtx: CanvasRenderingContext2D,
  newCtx: CanvasRenderingContext2D,
  lineWidth: number = 1,
  lineColor: string = '#000',
  levels: number[] = [2, 4],
  range: number[] = [0, 85, 170, 255],
  velocity: number = 1.89,
) => {
  let worker: Worker_;
  let width = rawCtx.canvas.width;
  let height = rawCtx.canvas.height;
  newCtx.canvas.width = width;
  newCtx.canvas.height = height;
  let rawImgData = getPixelsFromCanvas(rawCtx);
  console.log('sketch imgdata', rawImgData);
  newCtx.clearRect(0, 0, newCtx.canvas.width, newCtx.canvas.height);
  if (worker) {
    worker.end();
  }
  worker = $worker({
    do: 'js/img_calc.js',
    message: (data: ServiceWorkerMessageEvent) => {
      console.log('get worker message', data.data);
      let newExe = data.data.exeCom.reverse().map(val => val.concat([{
        action: "ORIGIN", distance: 0, direct: "UP"
      }])).reduce((a, b) => a.concat(b));
      console.log('new exe', newExe);
      drawLines(newCtx, newExe, { width: lineWidth, color: lineColor }, [.5, .5], velocity);
      worker.end();
    },
    error: err => {
      logRed('worker thread error:', err);
    }
  });
  worker.emit({
    exeFunc: 'transformToGray',
    infoData: [rawImgData.data, rawImgData.width, levels, range]
  });
}
