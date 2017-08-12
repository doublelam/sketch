export const getRidOfSpace = (str: string) => {
  return str.replace(/^\s*|\s(?=\s)|\s*$/g, '');
}

export const addClass = (ele: HTMLElement, cls: string | string[]): HTMLElement => {
  let eleCls = ele.className;
  let clsArr: string[] = typeof cls === 'string' ? cls.split(/\s*,\s*|\s+/g) : cls;
  for (let val of clsArr) {
    if (new RegExp(val, 'g').test(eleCls)) {
      continue;
    }
    eleCls += ` ${val}`;
  }
  ele.className = getRidOfSpace(eleCls);
  return ele;
}

export const removeClass = (ele: HTMLElement, cls: string | string[]): HTMLElement => {
  let eleCls = ele.className;
  let clsArr: string[] = typeof cls === 'string' ? cls.split(/\s*,\s*|\s+/g) : cls;
  let regExp = new RegExp(clsArr.join('|'), 'g');
  let newCls = eleCls.replace(regExp, '')
  ele.className = getRidOfSpace(newCls);
  return ele;
}
