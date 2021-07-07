import { Component } from '@angular/core';
import arrayWords from '../utils/words';
import arrayCountries from '../utils/country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';

  words = '';
  country = '';
  limit = 10;

  handleSlideChange(event:any){
    this.limit=event.target.value;
  }

  generate(){
    this.words=arrayWords.slice(0,this.limit).join(" ");
  }

  generateRandom(){
    // this.words=arrayWords.map(()=>Math.ceil(Math.random()*20)).join(" ");
    this.country = arrayCountries.slice(Math.random()*arrayCountries.length).join(" ");   

  }
}
