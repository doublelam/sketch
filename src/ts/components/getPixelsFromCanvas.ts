export const getPixelsFromCanvas = (
  canvasContext: CanvasRenderingContext2D,
  fromX: number,
  fromY: number,
  width: number,
  height: number
) => {
  const imgData = canvasContext.getImageData(fromX, fromY, width, height);
  return imgData;
}

