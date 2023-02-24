import { Component } from '@angular/core';
import { Book } from '../services/book';
import { LibraryServiceService } from '../services/library-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  library: Book[]= [];

  constructor(public LibraryServiceService: LibraryServiceService) { }

  getLibrary(){
    this.LibraryServiceService.getData().subscribe((res: Book[])=> {
      this.library=res;
    }, (err) => {
      alert('failed loading Books');
    })
  }

  ngOnInit(): void {
    this.getLibrary();
}

}

