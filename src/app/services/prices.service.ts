import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PricesService {
  private priceUrl = 'API_URL_FOR_REALTIME_PRICE';
  private historyUrl = 'API_URL_FOR_HISTORICAL_PRICES';
  private priceSubject = new Subject<any>();

  constructor(private http: HttpClient) { }

  getRealTimePrice(): Observable<any> {
    return this.priceSubject.asObservable();
  }

  fetchRealTimePrice(): void {
    this.http.get(this.priceUrl).subscribe(data => {
      this.priceSubject.next(data);
    });
  }

  getHistoricalPrices(): Observable<any> {
    return this.http.get(this.historyUrl).pipe(
      map(response => {
        // return response['data'];
      })
    );
  }
}
