import { Component, OnInit } from '@angular/core';
import { Keg } from '../keg';
import { KEGS } from '../keg-list';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-kegs',
  templateUrl: './kegs.component.html',
  styleUrls: ['./kegs.component.css'],
  providers: [DatePipe]
})
export class KegsComponent implements OnInit {
  kegs =  KEGS;
  addKeg = false;
  filterVal = 0;
  filterBy = "";
  filter = false;
  today: number = Date.now();
  selectedKeg: Keg;

  constructor(private datePipe: DatePipe) { }


  getDate(date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

  ngOnInit() {

  }
  onSelect(keg: Keg): void {
    this.selectedKeg = keg;
  }

  clickAway(): void {
    this.addKeg = false;
    this.selectedKeg = null;
  }
  addAKeg(): void {
    this.addKeg = true;
  }

  filterKeg(input: number, type: string) : void {
    this.filter = true;
    this.filterBy = type;
    this.filterVal = input;
  }

  sell(keg: Keg, size: number):void{
    let temp = this.selectedKeg;
    this.onSelect(keg);
    if(this.selectedKeg.amount > size) {
    this.selectedKeg.amount -= size;
  }else{
    console.log("NO mas cervesa! Go home!");
  }
    this.onSelect(temp);


  }
  AddKegToKegs(name: string, price: number, abv: number, ibu: number): void {
    this.kegs.push({id: 1, name: name, amount: 100, price: price, abv: abv, ibu: ibu},);
    this.addKeg = false;
  }



}
