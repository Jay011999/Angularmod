import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrl: './mobiles.component.css',
})
export class MobilesComponent implements OnInit{
  constructor(private dataServices: DataService) {}
  ngOnInit(): void {
  }

  addItem() {
    const data = this.dataServices.getData();
    console.log(data);
  }
}
