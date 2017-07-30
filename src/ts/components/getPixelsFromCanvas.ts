export const getPixelsFromCanvas = (
  canvas: CanvasRenderingContext2D,
  from = 0,
  to = 0,
  width: number,
  height: number
) => {
  const imgData = canvas.getImageData(from, to, width, height);
  console.log('imgData', imgData);
  return imgData;
}