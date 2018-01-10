import { Injectable } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { Http } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Arts } from './arts';
import { ARTSEN } from './mock-artsen';
//import * as dokters from "./data/dokters.json";


@Injectable()

export class ArtsService {
  getArtsen(): Observable<Arts[]> {
    return of(ARTSEN);
  }
  getArts(fid: string): Observable<Arts> {
    return of(ARTSEN.find(arts => arts.fid === fid));
  }
  docs: Object[];

  // constructor(private http: Http) { }
  // getDokters(){
  //    this.http.get('../assets/dokters.json').subscribe(res => {
  //     this.docs = res.json();
  //   })    ;
  //   console.log("log in de service " + this.docs);
  // }

  private apiUrl = './assets/dokters.json'

  constructor(
    private http: HttpClient) { }
    getDokters (): Observable<Arts[]> {
      return this.http.get<Arts[]>(this.apiUrl)
        .pipe(
          catchError(this.handleError('getDokters', []))
        );
    }

    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
   
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
   
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}
