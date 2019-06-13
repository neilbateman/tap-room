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
  edit = false;
  filterVal = 0;
  filterBy = "";
  filter = false;
  today: Date = new Date();
  selectedKeg: Keg;

  constructor(private datePipe: DatePipe) { }

  happyHour() {
  //let today = new Date();
  let todayHours = new Date().getHours();
    if(todayHours > 5 && todayHours < 23) {
      this.selectedKeg.price -=1;
    }
  }

  kegSale(keg: Keg): void {
    if(this.selectedKeg){
    return this.selectedKeg.price -=1;
  }
}
  allKegSale(): void {
    let comp = this;
    Object.keys(this.kegs).forEach(function(key){
      comp.kegs[key].price -=1;
    })
  }

  getDate(date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

  ngOnInit() {

  }
  onSelect(keg: Keg): void {
    if(this.selectedKeg){
      this.selectedKeg.price +=1;
    }
    this.selectedKeg = keg;
    this.happyHour();
    this.today = new Date();
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
  editKeg(): void {
    this.edit = true;
  }
  editSelectedKegs(name: string, price: number, abv: number, ibu: number) : void {
    this.selectedKeg.push({id: 1, name: name, amount: 100, price: price, abv: abv, ibu: ibu});
    this.edit = false;

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
