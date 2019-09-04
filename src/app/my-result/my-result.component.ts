import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { current, previous, clear } from '../results.actions';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-my-result',
  templateUrl: './my-result.component.html',
  styleUrls: ['./my-result.component.scss']
})
export class MyResultComponent implements OnInit {
  result$: Observable<number>;

  constructor(private store: Store<{ result: number }>, private api: ApiService) {
    this.result$ = store.pipe(select('result'));
  }

  current(query: string, searchNum: number, queries?: Array<string>){
    this.store.dispatch(current({query: query, searchNum: searchNum, queries: queries}));
  }
  previous(){
    this.store.dispatch(previous());
  }
  clear(){
    this.store.dispatch(clear());
  }

  ngOnInit() {
  }

}
