import {
  Component,
  OnInit
} from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  movies1: Observable<any[]>;
  movies2: Observable<any[]>;

  constructor(private http: Http) { }

  ngOnInit() {
    this.movies1 = this.http.get('./../data/movies.json')
      .map(res => res.json())
      .share();

    setTimeout(() => this.movies2 = this.movies1, 1000);
  }

  add() {
    this.http.post('./../data/movies.json', { body: { 'Title': 'Test' } });
  }
}
