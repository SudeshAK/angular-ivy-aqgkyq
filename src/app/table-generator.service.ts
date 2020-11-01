import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable()
export class TableGeneratorService {
  private _communicate = new Subject<any>();
  constructor() {}

  getData(): Observable<any> {
    return this._communicate.asObservable();
  }
  sendData(data) {
    this._communicate.next(data);
  }
}
