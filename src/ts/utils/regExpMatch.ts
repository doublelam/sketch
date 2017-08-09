export class RegExpr {
  static ifColor(str: string) {
    return /(^rgba\(((1|2(?![6-9]|[5][6-9]))?[0-9]?[0-9],){3}(\.+\d+|1)\)$)|(^#[0-9a-fA-F]{3}$)|(^#[0-9a-fA-F]{6}$)/g.test(str);
  }

  static ifNumber(str:string){
    return /^(?!0\d+)([0-9]*\.?\d+)$/g.test(str)
  }

  static ifNumberArray(str:string){
    return /^\[(\d*\.?\d+,)*\d*\.?\d+\]$/g.test(str)
  }

}




