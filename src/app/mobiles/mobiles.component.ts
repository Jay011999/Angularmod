import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrl: './mobiles.component.css',
})
export class MobilesComponent implements OnInit {
  category:string='';
  products!:any;
  // subscription: Subscription | undefined;
  constructor(private obj: DataService,private route:ActivatedRoute) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{
      this.category=params['category'];
    })
    this.obj.getProducts(this.category).subscribe({
      next: (data)=>this.products=data,
      error: (err) => console.log(err),
      complete: () => console.log('complete'),
    });
  }

  addItem() {
    const data = this.obj.getData();
    console.log(data);
  }
}
