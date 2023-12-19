import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router){}
  menuList =[
    {
      id:1,
      category: "Video",
      namaLayanan: "Netflix",
      urlGambar:'assets/img/netflix.jpg'
    },
    {
      id:2,
      category: "Video",
      namaLayanan: "Disney Plus",
      urlGambar:'assets/img/disney-plus.jpg'
    },
    {
      id:3,
      category: "Video",
      namaLayanan: "Vidio",
      urlGambar:'assets/img/vidio.jpg'
    },
    {
      id:4,
      namaLayanan: "Spotify",
      category: "Music",
      urlGambar:'assets/img/spotify.jpg'
    }
  ]
  redirectToDetailPage(id:number):void{
    this.router.navigate([`${id}`], {state: this.getDataBy(id)}) 
  }
  getDataBy(id:number) {
    return this.menuList.find((item)=> item.id == id)
}
}


