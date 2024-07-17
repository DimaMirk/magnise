import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { get } from 'http';
import { map, Observable, Subject } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PricesService {
  private tokenUrl = `${environment.URI}/identity/realms/fintatech/protocol/openid-connect/token`;
  private historyUrl = 'API_URL_FOR_HISTORICAL_PRICES';
  private priceSubject = new Subject<any>();

  constructor(
    private http: HttpClient
    ) { }


  getToken() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    
    const urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "password");
    urlencoded.append("client_id", "app-cli");
    urlencoded.append("username", "r_test@fintatech.com");
    urlencoded.append("password", "kisfiz-vUnvy9-sopnyv");
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
    };
    
    fetch("https://platform.fintacharts.com/identity/realms/fintatech/protocol/openid-connect/token", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }

  getData(){
   return  this.http.get('/assets/data.json');
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
