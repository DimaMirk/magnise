import { Component } from '@angular/core';
import { PriceChartComponent } from './price-chart/price-chart.component';
import { PriceDisplayComponent } from './price-display/price-display.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports:[PriceChartComponent, PriceDisplayComponent]
})
export class AppComponent {
  title = 'mdb-angular-ui-kit-free';
}
