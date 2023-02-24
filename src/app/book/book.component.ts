import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  bookText: string[] = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Sed malesuada quam euismod nunc posuere nec.',
    'In vel metus eget nisi pulvinar facilisis.',
    'Donec vel urna tincidunt, iaculis est vel, volutpat velit.',
    'Vestibulum sit amet purus ut enim sollicitudin porttitor.'
  ];
}