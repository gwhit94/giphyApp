import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable, interval, fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})


export class MainComponent implements OnInit {
  searchOutput: any;
  timer: Observable<any> = interval(1000);


  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.timer.subscribe(val => val);

    const searchField = document.getElementById('searchField');

    const keyUps = fromEvent(searchField, 'keyup').pipe(
      map(e => e.target['value']),
      filter(text => text.length > 3),
      debounceTime(3000),
      distinctUntilChanged()
    );

    keyUps.subscribe(evt => 
      this.apiService.apiSearch(evt).subscribe(res => this.searchOutput = res)
    );
  }
}
