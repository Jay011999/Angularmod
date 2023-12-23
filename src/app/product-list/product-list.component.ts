import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
 /* products: any = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      type: 'Mobile',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description 2',
      type: 'Desktop',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description 3',
      type: 'Laptop',
    },
  ];

  isadmin=false;
  somevalue='Ram_';*/

  categories:string[]=['Mobiles','Laptops','Furniture','TVs'];
}

