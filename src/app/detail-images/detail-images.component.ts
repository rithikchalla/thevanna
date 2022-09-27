import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-detail-images',
  templateUrl: './detail-images.component.html',
  styleUrls: ['./detail-images.component.scss']
})
export class DetailImagesComponent implements OnInit {
  images: any[] = [];
  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.images = this.service.images_folder;
  }

}
