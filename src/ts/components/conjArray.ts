export type ExeCon = {
  lineFeed: boolean,
  gray: number,
  count: number
}
export const conjArray = (UintArr: Uint8Array, width: number): ExeCon[] => {
  let _tempNum = UintArr[0];
  let num = 0;
  let _objArr: ExeCon[] = [];
  for (let i in UintArr) {
    let _i = Number(i);
    if (UintArr[_i] === _tempNum) {
      num++
    } else {
      _objArr.push({
        lineFeed: false,
        gray: _tempNum,
        count: num || 1
      })
      _tempNum = UintArr[_i];
      num = 1;
    }
    if (_i + 1 && (_i + 1) % width === 0) {
      _objArr.push({
        lineFeed: false,
        gray: _tempNum,
        count: num || 1
      });
      _objArr.push({
        lineFeed: true,
        gray: 0,
        count: 0
      })
      num = 0;
      _tempNum = UintArr[_i + 1]
    }
  }
  return _objArr;
}
