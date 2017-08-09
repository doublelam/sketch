import { RegExpr } from '../utils/regExpMatch';
import { logBlue, logGreen, logRed } from '../utils/consolelog';

class StyleConfig {
  private lineWidth: number;
  private lineColor: string;
  private matchLevels: number[];
  private pixelRange: number[];
  private velocity: number
  private initConfig = {
    color: '#000',
    width: 1,
    matchLevels: [3, 6, 12],
    pixelRange: [0, 85, 170, 255],
    velocity: 5
  }
  constructor() {
    this.lineWidth = this.initConfig.width;
    this.lineColor = this.initConfig.color;
    this.matchLevels = [...this.initConfig.matchLevels];
    this.pixelRange = [...this.initConfig.pixelRange];
    this.velocity = this.initConfig.velocity
  }
  setColor(color: string) {
    if (RegExpr.ifColor(color)) {
      this.lineColor = color;
      return this;
    }
    logRed('Invalid colour formatter');
    return this;
  }

  setWidth(width: string) {
    if (RegExpr.ifNumber(width)) {
      this.lineWidth = Number(width);
      return this;
    }
    logRed('Invalid number formatter');
  }

  setMatchLevels(levels: string) {
    if (RegExpr.ifNumberArray(levels)) {
      try {
        this.matchLevels = JSON.parse(levels)
        return this;
      } catch (e) {
        logRed('JSONparse Error:', e);
      }
    }
    logRed('Invalid number array');
    return this;
  }

  setPixelRange(range: string) {
    if (RegExpr.ifNumberArray(range)) {
      try {
        this.pixelRange = JSON.parse(range)
        return this;
      } catch (e) {
        logRed('JSONparse Error:', e);
      }
    }
    logRed('Invalid number array');
    return this;
  }

  setVelocity(velocity: string) {
    if (RegExpr.ifNumber(velocity)) {
      this.velocity = Number(velocity);
      return this;
    }
    logRed('Invalid number');
    return this;
  }

  getColor(str?: string) {
    return str === 'init' ? this.initConfig.color : this.lineColor;
  }

  getWidth(str?: string) {
    return str === 'init' ? this.initConfig.width : this.lineWidth;
  }

  getLevels(str?: string) {
    return str === 'init' ? this.initConfig.matchLevels : this.matchLevels;
  }

  getRange(str?: string) {
    return str === 'init' ? this.initConfig.pixelRange : this.pixelRange;
  }

  getVelocity(str?: string) {
    return str === 'init' ? this.initConfig.velocity : this.velocity
  }
}

export const styleConfig = new StyleConfig();
