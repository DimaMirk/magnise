import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { PricesService } from '../services/prices.service';

@Component({
  selector: 'app-price-display',
  standalone: true,
  imports: [MdbFormsModule, ReactiveFormsModule],
  templateUrl: './price-display.component.html',
  styleUrl: './price-display.component.scss'
})
export class PriceDisplayComponent implements OnInit {

  constructor(
    public service:PricesService
  ){
    
  }
  ngOnInit(): void {
      this.service.getToken().subscribe((data)=>{
        if(data){
          console.log(data)
        }
      }) 
  }

  getToken(){
    this.service.getToken().subscribe((data)=>{
      if(data){
        console.log(data)
      }
    }) 
  }
}
