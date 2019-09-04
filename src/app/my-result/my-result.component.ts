import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { current, previous, clear } from '../results.actions';

@Component({
  selector: 'app-my-result',
  templateUrl: './my-result.component.html',
  styleUrls: ['./my-result.component.scss']
})
export class MyResultComponent implements OnInit {
  result$: Observable<number>;

  constructor(private store: Store<{ result: number }>) {
    this.result$ = store.pipe(select('result'));
  }

  current(){
    this.store.dispatch(current());
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
