export const getEle = query => document.querySelector(query);

// first raw canvas
export const canvasRaw: HTMLCanvasElement = <HTMLCanvasElement>getEle('#canvas-raw');
export const rawContxt: CanvasRenderingContext2D = canvasRaw.getContext('2d');

// second redraw canvas
export const canvasReDraw: HTMLCanvasElement = <HTMLCanvasElement>getEle('#canvas-redraw');
export const redrawContxt: CanvasRenderingContext2D = canvasReDraw.getContext('2d');

// third final canvas
export const canvasFinal: HTMLCanvasElement = <HTMLCanvasElement>getEle('#canvas-final-draw');
export const finalContxt: CanvasRenderingContext2D = canvasFinal.getContext('2d');

