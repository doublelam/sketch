export const logColors = (msg: string, color: string, ...args) => {
  if (typeof msg !== 'string') {
    return console.log(msg, ...args);
  }
  return console.log(`%c${msg}`, `color: ${color}`, ...args);
}

export const logRed = (msg: any, ...args) => logColors(msg, '#CE594B', ...args);

export const logGreen = (msg: any, ...args) => logColors(msg, '#4C9F67');
export const logBlue = (msg: any, ...args) => logColors(msg, '#588CEE');


