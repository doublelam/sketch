export const getEle = (query: string): HTMLElement | HTMLCollection | NodeList => {
  if (/^#\w{1}/g.test(query)) {
    return document.getElementById(query.replace(/^#/g, ''));
  }
  if (/^\.\w{1}/g.test(query)) {
    return document.getElementsByClassName(query.replace(/^#/g, ''));
  }
  if (/^tag\:\w{1}/g) {
    return document.getElementsByTagName(query.replace(/^tag\:/g, ''))
  }
  return document.querySelectorAll(query);
}

// first raw canvas
export const canvasRaw: HTMLCanvasElement = <HTMLCanvasElement>getEle('#canvas-raw');
export const rawContxt: CanvasRenderingContext2D = canvasRaw.getContext('2d');

// second redraw canvas
// export const canvasReDraw: HTMLCanvasElement = <HTMLCanvasElement>getEle('#canvas-redraw');
// export const redrawContxt: CanvasRenderingContext2D = canvasReDraw.getContext('2d');

// third final canvas
export const canvasFinal: HTMLCanvasElement = <HTMLCanvasElement>getEle('#canvas-final-draw');
export const finalContxt: CanvasRenderingContext2D = canvasFinal.getContext('2d');

export const fileInput: HTMLInputElement = <HTMLInputElement>getEle('#file-input');
export const sketchBtn: HTMLDivElement = <HTMLDivElement>getEle('#sketch-confirm');

export const colorSetInput: HTMLInputElement = <HTMLInputElement>getEle('#color-set-input');
export const colorDot: HTMLElement = <HTMLElement>getEle('#dot-color');

export const widthSetInput: HTMLInputElement = <HTMLInputElement>getEle('#width-set-input');
export const widthDot: HTMLElement = <HTMLElement>getEle('#dot-width');

export const levelsSetInput: HTMLInputElement = <HTMLInputElement>getEle('#levels-set-input');
export const levelsDot: HTMLElement = <HTMLElement>getEle('#dot-levels');

export const rangeSetInput: HTMLInputElement = <HTMLInputElement>getEle('#range-set-input');
export const rangeDot: HTMLElement = <HTMLElement>getEle('#dot-range');

export const velocitySetInput: HTMLInputElement = <HTMLInputElement>getEle('#velocity-set-input');
export const velocityDot: HTMLElement = <HTMLElement>getEle('#dot-velocity');
