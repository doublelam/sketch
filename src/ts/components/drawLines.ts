import { logBlue, logGreen, logRed } from '../utils/consolelog';
export type Action = 'DRAW' | 'MOVE' | 'LINE_FEED' | 'ORIGIN' | 'END'

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
  initPosition: [number, number] = [.5, .5],
  velocity: number = 1.89,
  callback: Function = () => logBlue('DRAW FINISHED')
): CanvasRenderingContext2D => {
  let timeoutTick: number;
  let _point: [number, number] = [initPosition[0], initPosition[1]];
  console.log('init', _point, 'color', linStyle.color)
  ctx.strokeStyle = linStyle.color;
  ctx.lineWidth = linStyle.width;
  clearTimeout(timeoutTick);
  ctx.beginPath();
  ctx.moveTo(_point[0], _point[1]);
  ctx.stroke();
  const loopExe = (val: DrawExe, i) => {
    if (val.action === 'END'){
      callback();
      return;
    }
    if (val.action === 'ORIGIN') {
      logBlue('origin');
      ctx.beginPath();
      ctx.moveTo(initPosition[0], initPosition[1]);
      _point = [initPosition[0], initPosition[1]];
      ctx.stroke();
      return;
    }

    _point = [
      _point[0] + DIR_MAP[val.direct][0] * val.distance,
      _point[1] + DIR_MAP[val.direct][1] * val.distance
    ];
    let command = ACTION_MAP[val.action];
    let xAxis = _point[0];
    let yAxis = _point[1];
    if (command === 'moveTo'){
      ctx.beginPath();
    }
    ctx[command](xAxis, yAxis);
    ctx.stroke();
    return;
    // ctx.closePath();
  }
  let speed: number = 1000 / (velocity * 111 - 110);
  const timeout = (i: number, val: DrawExe) => {
    timeoutTick = setTimeout(() => {
      loopExe(opts[i], i);
    }, i * speed);
  }
  for (let i in opts) {
    timeout(Number(i), opts[i]);
  }
  return ctx;
}

