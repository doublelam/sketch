import { getPixelsFromCanvas } from './getPixelsFromCanvas';
import { $worker, Worker_ } from '../utils/Worker';
import { logBlue, logGreen, logRed } from '../utils/consolelog';
import { drawLines } from './drawLines';
export const drawCanvas = (ctx: CanvasRenderingContext2D, imgBase64: string) => {
  const img = new Image();
  img.onload = (e: Event) => {
    console.log('width', img.naturalWidth, 'height', img.naturalHeight)
    ctx.canvas.width = img.naturalWidth;
    ctx.canvas.height = img.naturalHeight;
    ctx.drawImage(img, 0, 0)
  }
  img.src = imgBase64;
}

export const sketchPics = (
  rawCtx: CanvasRenderingContext2D,
  newCtx: CanvasRenderingContext2D,
) => {
  let worker: Worker_;
  let width = rawCtx.canvas.width;
  let height = rawCtx.canvas.height;
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
      drawLines(newCtx, data.data.exeCom);
    },
    error: err => {
      logRed('worker thread error:', err)
    }
  });
  worker.emit({
    exeFunc: 'transformToGray',
    infoData: [rawImgData.data, rawImgData.width, 3, [0, 85, 177, 255]]
  });

}