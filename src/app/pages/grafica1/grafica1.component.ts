import { Component } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html'
})
export class Grafica1Component   {
   data1= {
    labels: [ 'El fuerte', 'Pricesmart', 'Riba Smith' ],
    datasets: [
      {
        data: [ 90, 150, 69 ] ,
        backgroundColor: ["red", "green", "blue"],
        hoverBackgroundColor: ["darkred", "darkgreen", "darkblue"],
      },
    ]
  };


}
