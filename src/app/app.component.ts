import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';

  isvalid=true;
  imgpath='../favicon.ico'

  onClick(){
    alert('button clicked!!')
  }
}
