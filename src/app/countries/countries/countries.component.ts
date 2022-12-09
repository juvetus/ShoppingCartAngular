import { Component } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent {
  countries = ["france", "germany", "usa", "england"] ;
 

  ngOnInit(): void {
   
    
  }
  delete(del: any){
    let index = this.countries.indexOf(del)
    this.countries.splice(index, 1);
  }

}
