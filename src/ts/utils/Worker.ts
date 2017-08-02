interface Option {
  do: Function | string,
  message: (data: any) => any,
  error: (err: any) => any
}

class Worker_ {
  private opt: Option;
  private _worker: Worker;
  constructor(option: Option) {
    this.opt = option;
    this.setWorker(this.opt.do);
    this._onmessage();
    this._onerror();
    return this;
  }

  public emit(data: any, transfer?: any[]) {
    this._worker.postMessage(data, transfer);
  }

  public end(): Boolean {
    this._worker.terminate();
    return false;
  }

  private _onmessage() {
    this._worker.onmessage = this.opt.message;
  }

  private _onerror() {
    this._worker.onerror = this.opt.error;
  }

  private setWorker(doAct: Function | string): Worker {
    this._worker = new Worker(this.getJSBLOB(doAct));
    return this._worker;
  }

  private getJSBLOB(doAct: Function | string): string {
    if (typeof doAct === 'string') {
      return doAct;
    }
    const blobJs: Blob = new Blob([`(function BLOB_MODULE(){(${doAct.toString()})()})()`], { type: 'text/javascript' });
    return URL.createObjectURL(blobJs)
  }

}

export const $worker = (opt: Option) => new Worker_(opt);
