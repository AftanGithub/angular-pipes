import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  payeeName = ""
  date = ""
  amount=0;
  miles=0;
  onChangeName(event:Event){
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.payeeName = value;
  }

  onChangeDate(event:Event){
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.date = value;
  }

  onChangeAmount(event:Event){
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.amount = parseFloat(value);
  }
  onChangeMiles(event:Event){
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.miles = parseFloat(value);
  }
}
