export const getPixelsFromCanvas = (
  ctx: CanvasRenderingContext2D,
  fromX: number = 0,
  fromY: number = 0,
) => {
  const imgData = ctx.getImageData(fromX, fromY, ctx.canvas.width, ctx.canvas.height);
  return imgData;
}

