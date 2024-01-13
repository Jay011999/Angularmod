import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mobile-detail',
  templateUrl: './mobile-detail.component.html',
  styleUrl: './mobile-detail.component.css',
})
export class MobileDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  productId!: string | null;
  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    //now get the data for selecetd product
  }
  navigatetoMain() {
    const queryParams = { category: 'Mobiles' };
    this.router.navigate(['/products/Mobiles'], { queryParams });
  }
  public toShowStructural:true | undefined;

 
}
