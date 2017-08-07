import { logBlue, logGreen, logRed } from '../utils/consolelog';
export type Action = 'DRAW' | 'MOVE' | 'LINE_FEED' | 'ORIGIN'

export type DrawExe = {
  action: Action,
  distance: number,
  direct: 'LEFT' | 'RIGHT' | 'UP' | 'DOWN'
}

type LineStyle = {
  width: number,
  color: string
}

const DIR_MAP = {
  'LEFT': [-1, 0],
  'RIGHT': [1, 0],
  'UP': [0, -1],
  'DOWN': [0, 1]
}
const ACTION_MAP = {
  'DRAW': 'lineTo',
  'MOVE': 'moveTo',
}


export const drawLines = (
  ctx: CanvasRenderingContext2D,
  opts: DrawExe[],
  linStyle: LineStyle = {
    width: .5,
    color: '#000'
  },
  initPosition: [number, number] = [.5, .5]
): CanvasRenderingContext2D => {
  let timeoutTick: number;
  let _point: [number, number] = [initPosition[0], initPosition[1]];
  console.log('init', _point)
  ctx.strokeStyle = linStyle.color;
  ctx.lineWidth = linStyle.width;
  clearTimeout(timeoutTick);
  ctx.beginPath();
  ctx.moveTo(_point[0], _point[1]);
  const loopExe = (val: DrawExe, i) => {
    clearTimeout(timeoutTick);
    if (val.action === 'ORIGIN') {
      logBlue('origin');
      ctx.moveTo(initPosition[0], initPosition[1]);
      _point = [initPosition[0], initPosition[1]];
      ctx.stroke();
      ctx.closePath();
      return;
    }
    _point = [
      _point[0] + DIR_MAP[val.direct][0] * val.distance,
      _point[1] + DIR_MAP[val.direct][1] * val.distance
    ];
    let command = ACTION_MAP[val.action];
    let xAxis = _point[0];
    let yAxis = _point[1];
    ctx[command](xAxis, yAxis);
    ctx.stroke();
    ctx.closePath();
  }
  const timeout = (i: number, val: DrawExe) => {
    timeoutTick = setTimeout(() => {
      loopExe(opts[i], i)
    }, i * 10);
  }
  for (let i in opts) {
    timeout(Number(i), opts[i])
  }
  return ctx;
}

