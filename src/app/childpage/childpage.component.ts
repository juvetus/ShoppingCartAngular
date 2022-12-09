import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-childpage',
  templateUrl: './childpage.component.html',
  styleUrls: ['./childpage.component.scss']
})
export class ChildpageComponent {
  @Input() name: any;
  @Output() changeName = new EventEmitter<string>();

  //lastname = "Henry"


  addNewItem(myname: string) {
    console.log(myname)
    this.changeName.emit(myname);
  }


  showAlert(){
    alert("It work from parent")
  }


  
}
