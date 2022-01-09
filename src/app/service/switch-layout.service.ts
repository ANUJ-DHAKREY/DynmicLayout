import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SwitchLayoutService {
  private _switcLayout$: BehaviorSubject<string> = new BehaviorSubject('layout1');
  private switchlayout$: Observable<string>;
  constructor() {
    this.switchlayout$ = this._switcLayout$.asObservable();
  }

  public setSelectedLayout(layoutVal: string) {
    this._switcLayout$.next(layoutVal);
  }

  public getLayout(): Observable<string> {
    return this.switchlayout$;
  }
}
