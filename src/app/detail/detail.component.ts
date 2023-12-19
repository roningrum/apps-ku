import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit{
  category :string |null = null;
  id: number | null = null;
  namaLayanan: string | null = null;

  dataPaket:any;

  constructor( private router:Router, private route: ActivatedRoute) {
    console.log(this.router.getCurrentNavigation()?.extras.state)
    console.log('Hello',this.route.snapshot.paramMap.get("id"))
    this.dataPaket = this.router.getCurrentNavigation()?.extras.state
    console.log(this.dataPaket)
  }
  
  ngOnInit(): void {
    // let data= this.router.getCurrentNavigation()?.extras.state?
    // this.namaLayanan = 
   
  }
  
}
