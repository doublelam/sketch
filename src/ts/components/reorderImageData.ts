// export const reorderImageData = (arr: Int8Array, num: number = 4) => {
//   const ahead4 = arr.slice(0, 4);
//   const rsltObj = {
//     rawRGB: ahead4.slice(0, 3),
//     opacity: ahead4[ahead4.length - 1],
//     grayscale: ahead4[0] * 0.3 + ahead4[1] * 0.59 + ahead4[1] * 0.11
//   };
//   if (arr.length <= 4) {
//     return [rsltObj];
//   }
//   return [rsltObj].concat(reorderImageData(arr.slice(4), num));
// } 

const _rID = pixels => {
  return tailArr => {
    const outputObj = {
      rawRGB: tailArr.slice(0, 3),
      opacity: tailArr[3] || 1,
      grayscale: 255
    }
    if (tailArr.length <= 4) {
      return pixels;
    }
    return _rID([outputObj].concat(pixels))(tailArr.slice(4));
  }
}

export const reorderImageData = _rID([]);