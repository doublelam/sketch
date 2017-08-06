import { conjArray } from '../components/conjArray';

export const transformToGray = (arr: Uint8Array) => {
  let _arr: Uint8Array = arr;
  for (let i = 0; i <= arr.length - 4; i += 4) {
    let gray = parseInt(((arr[0] + arr[1] + arr[2]) / 3).toString())
    _arr[i] = gray; _arr[i + 1] = gray; _arr[i + 2] = gray;
  }
  return _arr;
}

export const closest = (n: number, arr: Uint8Array): number => {
  let _gap = Math.abs(n - arr[0]);
  let _ele = arr[0];
  for (let i in arr) {
    let gap_ = Math.abs(arr[i] - n);
    if (gap_ < _gap) {
      _gap = gap_;
      _ele = arr[i]
    }
  }
  return _ele;
}

export const relayoutArr = (arr: Uint8Array, width: number, gap: number, rangeArr: Uint8Array): {
  UintArray: Uint8Array,
  pixelPoints: Uint8Array,
  conjArray: any[]
} => {
  let _arr: number[] = [];
  let _pixels: number[] = [];
  for (let i = 0; i < arr.length; i += width * 4 * gap) {
    for (let j = 0; j < width * 4; j += 4) {
      _pixels.push(closest(parseInt(((arr[j + i] + arr[j + i + 1] + arr[j + i + 2]) / 3).toString()), rangeArr));
      for (let k = 0; k <= 2; k++) {
        _arr.push(arr[j + i + k]);
      }
      _arr.push(arr[j + i + 3])
    }
  }
  let out_pixels = Uint8Array.from(_pixels);
  let out_arr = Uint8Array.from(_arr);
  return {
    pixelPoints: out_pixels,
    UintArray: out_arr,
    conjArray: conjArray(out_pixels, width)
  };
}





export const resetIntArray = (arr: Uint8Array, width: number) => {
  let _unit: number = 4 * width;
  let _arr: Uint8Array[] = [];
  for (let i = 0; i <= arr.length - _unit; i += _unit) {
    _arr.push(arr.slice(i, i + _unit))
  }
  return _arr;
}
