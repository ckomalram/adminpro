import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html'
})
export class DonaComponent implements OnInit {
  @Input() titulo = '';
  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: ["red", "green", "blue"],
        hoverBackgroundColor: ["darkred", "darkgreen", "darkblue"],
      },
    ]
  };
  // Doughnut
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

}
