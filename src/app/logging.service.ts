import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }
  logAnyChange(change: string) {
    console.log('The logged item is ' + change);
  }
}
