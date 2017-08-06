import { DrawExe } from './drawLines';
import { ExeCon } from './conjArray';
import { Action } from './drawLines';
export const generateExecutive = (exeArr: ExeCon[], gap: number, width: number) => {
  console.log('_eidth', exeArr)
  let _exe: DrawExe[] = [];
  let _out_str = '';
  for (let val of exeArr) {
    if (val.lineFeed) {
      _out_str += '\n'
      _exe.push({
        action: 'MOVE',
        distance: gap,
        direct: 'DOWN'
      });
      _exe.push({
        action: 'MOVE',
        distance: width,
        direct: 'LEFT'
      });
      continue;
    }

    let act: Action;
    if (val.gray <= 85) {
      act = 'DRAW';
      _out_str += (<any>'H').repeat(val.count);
    } else {
      act = 'MOVE';
      _out_str += (<any>' ').repeat(val.count);
    };
    _exe.push({
      action: act,
      distance: val.count,
      direct: 'RIGHT'
    })
  }
  return _exe;
}
