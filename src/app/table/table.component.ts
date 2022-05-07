import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data = {
    currency: "INR",
    loans: [
      {
        vendor: "xyz",
        amount: 200000,
        date: "2022/03/20",
        per: 100,
        intrest: 2
      }
    ]
  };


  getIntrest(amount, date, per, intrest) {

    let d1 = new Date(date);
    let d2 = new Date();

    let months;

    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();




    let formula = amount / per * intrest * months;

    return formula;

  }
  ngOnInit() {}
}