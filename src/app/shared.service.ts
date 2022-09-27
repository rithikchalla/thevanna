import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  images_folder: any[] = []

  constructor() { }
}
