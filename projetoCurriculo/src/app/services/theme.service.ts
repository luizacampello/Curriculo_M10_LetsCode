
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

export interface ThemeObject {
  oldValue: string;
  newValue: string;
};

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  initialSetting: ThemeObject = {
    oldValue: "",
    newValue: "bootstrap-dark"
  };

  themeSelection: BehaviorSubject<ThemeObject> =  new BehaviorSubject<ThemeObject>(this.initialSetting);

  constructor(localStorage: LocalStorageService) { }

  ngOnInit(){
    this.initialSetting.newValue = this.initUserPreferenceTheme();
  }

  setTheme(theme: string) {

    this.themeSelection.next(
      {
        oldValue: this.themeSelection.value.newValue,
        newValue: theme
      });
      localStorage['set'](theme);
  }

  importUserPreferenceTheme() : string {
    return this.initialSetting.newValue;
  }

  themeChanges(): Observable<ThemeObject> {
    return this.themeSelection.asObservable();
  }

  initUserPreferenceTheme() : string {
    let preference = localStorage['get']("theme");

    if(!preference) {
      preference = "bootstrap-dark";
    }

    return preference;
  }
}

