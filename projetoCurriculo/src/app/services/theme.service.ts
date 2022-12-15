
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

  constructor(public aStorage: LocalStorageService) { }

  setTheme(theme: string) {
    this.themeSelection.next(
      {
        oldValue: this.themeSelection.value.newValue,
        newValue: theme
      });
      this.aStorage.set("theme", theme);
  }

  importUserPreferenceTheme() : string {
    return this.initialSetting.newValue;
  }

  themeChanges(): Observable<ThemeObject> {
    return this.themeSelection.asObservable();
  }

  initUserPreferenceTheme() : void {
    let preference = this.aStorage.get("theme");

    if(preference != "bootstrap-dark" && preference != "bootstrap") {
      preference = "bootstrap-dark";
      this.aStorage['set']("theme", preference);
    }
    this.initialSetting.newValue = preference;
  }
}

