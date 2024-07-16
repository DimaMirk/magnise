import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PricesService {
  private tokenUrl = `${environment.URI}/identity/realms/:realm/protocol/openid-connect/token`;
  private historyUrl = 'API_URL_FOR_HISTORICAL_PRICES';
  private priceSubject = new Subject<any>();

  constructor(
    private http: HttpClient
    ) { }

  getToken(){
    console.log(environment)
    this.http.get(this.tokenUrl).subscribe(data => {
     console.log(data)
    });
  }

  getRealTimePrice(): Observable<any> {
    return this.priceSubject.asObservable();
  }

  // fetchRealTimePrice(): void {
  //   this.http.get(this.priceUrl).subscribe(data => {
  //     this.priceSubject.next(data);
  //   });
  // }

  getHistoricalPrices(): Observable<any> {
    return this.http.get(this.historyUrl).pipe(
      map(response => {
        // return response['data'];
      })
    );
  }
}
