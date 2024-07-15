import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';

@Component({
  selector: 'app-price-display',
  standalone: true,
  imports: [MdbFormsModule, ReactiveFormsModule],
  templateUrl: './price-display.component.html',
  styleUrl: './price-display.component.scss'
})
export class PriceDisplayComponent {

}
