import { Component, OnInit } from '@angular/core';
import { Keg } from '../keg';
import { KEGS } from '../keg-list';
@Component({
  selector: 'app-kegs',
  templateUrl: './kegs.component.html',
  styleUrls: ['./kegs.component.css']
})
export class KegsComponent implements OnInit {
  kegs =  KEGS;
  addKeg = false;

  selectedKeg: Keg;

  constructor() { }

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
