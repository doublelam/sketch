
import {
  colorSetInput,
  colorDot,
  widthSetInput,
  widthDot,
  levelsSetInput,
  levelsDot,
  rangeSetInput,
  rangeDot,
  velocitySetInput,
  velocityDot
} from '../components/GetDom';
import { styleConfig } from '../components/styleConfig';
import { RegExpr } from '../utils/regExpMatch';
import { InputSet } from '../components/inputWarn';
import { logBlue, logGreen, logRed } from '../utils/consolelog';
export class SetStyleFromDom {
  setColor() {
    const colorSetter = new InputSet(colorSetInput);
    colorDot.style.color = styleConfig.getColor();
    let initColor = styleConfig.getColor('init');
    colorSetInput.oninput = (e: Event) => {
      let val = (<any>e).target.value;
      if (val === '') {
        colorSetter.normal();
        styleConfig.setColor(initColor);
        colorDot.style.color = styleConfig.getColor();
        return;
      }
      if (!RegExpr.ifColor(val)) {
        colorSetter.warn();
        return;
      }
      styleConfig.setColor(val);
      colorDot.style.color = styleConfig.getColor();
      colorSetter.success();
      return;
    }
  }
  setWidth() {
    const widthSetter = new InputSet(widthSetInput);
    widthDot.style.fontSize = styleConfig.getWidth() + 10 + 'rem';
    let initWidth = styleConfig.getWidth('init');
    widthSetInput.oninput = (e: Event) => {
      let val = (<any>e).target.value;
      if (val === '') {
        widthSetter.normal();
        styleConfig.setWidth(String(initWidth));
        widthDot.style.fontSize = styleConfig.getWidth() + 10 + 'rem';
        return;
      }
      if (!RegExpr.ifNumber(val) || Number(val) > 9 || Number(val) <= 0) {
        widthSetter.warn();
        return;
      }
      styleConfig.setWidth(val);
      widthDot.style.fontSize = styleConfig.getWidth() + 10 + 'rem';
      widthSetter.success();
      return;
    }
  }

  setLevels() {
    const levelsSetter = new InputSet(levelsSetInput);
    levelsDot.style.transform = `scale(1,${1 / styleConfig.getLevels().length + 1})`;
    let initLevels = styleConfig.getLevels('init');
    levelsSetInput.oninput = (e: Event) => {
      let val = (<any>e).target.value;
      if (val === '') {
        levelsSetter.normal();
        styleConfig.setMatchLevels(JSON.stringify(initLevels));
        levelsDot.style.transform = `scale(1, ${1 / styleConfig.getLevels().length + 1})`;
        return;
      }
      if (!RegExpr.ifNumberArray(val)) {
        levelsSetter.warn();
        return;
      }
      styleConfig.setMatchLevels(val);
      levelsDot.style.transform = `scale(1,${1 / styleConfig.getLevels().length + 1})`;
      levelsSetter.success();
      return;
    }
  }

  setRange() {
    const rangeSetter = new InputSet(rangeSetInput);
    rangeDot.style.opacity = String(1 / styleConfig.getRange().length);
    let initrange = styleConfig.getRange('init');
    rangeSetInput.oninput = (e: Event) => {
      let val = (<any>e).target.value;
      if (val === '') {
        rangeSetter.normal();
        styleConfig.setPixelRange(JSON.stringify(initrange));
        rangeDot.style.opacity = String(1 / styleConfig.getRange().length);
        return;
      }
      if (!RegExpr.ifNumberArray(val)) {
        rangeSetter.warn();
        return;
      }
      styleConfig.setPixelRange(val);
      rangeDot.style.opacity = String(1 / styleConfig.getRange().length);
      rangeSetter.success();
      return;
    }
  }

  setVelocity() {
    const velocitySetter = new InputSet(velocitySetInput);
    velocityDot.style.animationDuration = 1000 / (styleConfig.getVelocity() * 111 - 110) + 's';
    let initvelocity = styleConfig.getVelocity('init');
    velocitySetInput.oninput = (e: Event) => {
      let val = (<any>e).target.value;
      if (val === '') {
        velocitySetter.normal();
        styleConfig.setVelocity(String(styleConfig.getVelocity('init')));
        velocityDot.style.animationDuration = 1000 / (styleConfig.getVelocity() * 111 - 110) + 's';
        return;
      }
      if (!RegExpr.ifNumber(val) || Number(val) > 10 || Number(val) < 1) {
        velocitySetter.warn();
        return;
      }
      styleConfig.setVelocity(val);
      velocityDot.style.animationDuration = 1000 / (styleConfig.getVelocity() * 111 - 110) + 's';
      velocitySetter.success();
      return;
    }
  }

  run() {
    this.setColor();
    this.setWidth();
    this.setLevels();
    this.setRange();
    this.setVelocity();
  }
}

export const setStyleFromDom = new SetStyleFromDom();
