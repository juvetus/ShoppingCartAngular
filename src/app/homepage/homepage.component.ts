import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

 currentItem = 'Hugo';
 
 
 // currentItem = ['Hogo', 'Henry', 'Jean', 'Dylane'];
 

  addItem(newName:string){
   
   this.currentItem = newName;
   
  }
 

 

}
