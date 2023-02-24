import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Book } from './book'; 

@Injectable({
  providedIn: 'root'
})
export class BookService {

  id: number = 0;
  livre!: Book;
  library: Observable<Book[]> = of([])

  constructor(private route: ActivatedRoute,private http: HttpClient) { }
  getData():  Observable<Book>  {
   this.route.params.subscribe(params => {
      this.id = params['id']
      this.library = this.http.get<Book[]>('assets/library.json');
      
    });

    this.library.pipe(
      map(array => array.find(element => element.id === this.id))
    );

    this.library.subscribe(el => {this.livre = el[0]})

    
    return of(this.livre)
  }
}
