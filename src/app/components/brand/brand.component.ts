import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
 brands:Brand[] = [];
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrand();
  }

  getBrand(){
    this.brandService.getBrand().subscribe(response => {
      this.brands=response.data
    })
  }
}
