import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {
  getItem<T>(key: string, parse = false): T {
    const item = localStorage.getItem(key) as string;
    return (parse ? JSON.parse(item) : item) as T;
  }

  setItem(key: string, value: string | object, stringify = false): void {
    const val = (stringify ? JSON.stringify(value) : value) as string;
    localStorage.setItem(key, val);
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
