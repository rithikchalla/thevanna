import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-interior',
  templateUrl: './interior.component.html',
  styleUrls: ['./interior.component.scss']
})
export class InteriorComponent implements OnInit {
  modern_farm_house: any[] = [];
  miyapur_home: any[] = [];
  black_room: any[] = [];
  project_x_1: any[] = []
  project_x_2: any[] = []
  display_orginal_image = true;
  images: any[] = [];


  constructor(private router: Router, private shared_service: SharedService) { 
  }

  ngOnInit(): void {
    this.modern_farm_house = [
      "../../images/modern-farm-house/01_2---Photo.png",
      "../../images/modern-farm-house/02_7---Photo.png"
    ]
    
    this.miyapur_home = [
      "../../images/miyapur-home/Guest Bedroom_view1.jpg",
      "../../images/miyapur-home/guest br_view 2.jpg",
      "../../images/miyapur-home/guest br_view 3.jpg",
      "../../images/miyapur-home/Master Bedroom.png"
    ]

    this.black_room = [
      "../../images/black-room/02 (1).png",
      "../../images/black-room/03 (1).png",
      "../../images/black-room/04 (1).png",
      "../../images/black-room/05.png",
      "../../images/black-room/07 (1).png",
      "../../images/black-room/08 (1).png",
    ]

    this.project_x_1 = [
      "../../images/Projectx-1/01_1 - Photo (1).jpg",
      "../../images/Projectx-1/01_2 - Photo (4).jpg",
      "../../images/Projectx-1/01_4 - Photo (4).jpg"
    ]

    this.project_x_2 = [
      "../../images/Project-x-2/01_2 - Photo (4).jpg",
      "../../images/Project-x-2/02_1 - Photo (1).jpg"
    ]
  }

  image_clicked(value: number) {
    this.shared_service.images_folder = this.modern_farm_house;
    switch(value){
      case 1 : {
        this.shared_service.images_folder = this.modern_farm_house
        break
      }
      case 2:{
        this.shared_service.images_folder = this.miyapur_home
        break
      }
      case 3 : {
        this.shared_service.images_folder = this.black_room
        break
      }
      case 4 : {
        this.shared_service.images_folder = this.project_x_1
        break
      }
      case 5 : {
        this.shared_service.images_folder = this.project_x_2
        break
      }
    }
    this.router.navigateByUrl("/detail_images")
  }
}
