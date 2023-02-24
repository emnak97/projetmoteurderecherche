import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Book } from './book'; 

@Injectable({
  providedIn: 'root'
})
export class LibraryServiceService {
  constructor(private http: HttpClient) { }
  getData(): Observable<Book[]> {
    return this.http.get<Book[]>('assets/library.json');
  }
}
