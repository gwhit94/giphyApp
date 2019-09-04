import {createReducer, on} from '@ngrx/store';
import {current, previous, clear} from './results.actions';
import { stat } from 'fs';

export interface State {
    query: string,
    searchNum: number,
    queries?: Array<string>
}

export const initialState: State = {
    query: "",
    searchNum: 0,
};

const _resultsReducer = createReducer(initialState,
    on(current, state => ({...state, searchNum: state.searchNum + 1})),
    on(previous, state => ({...state, searchNum: state.searchNum - 1})),
    on(clear, state => ({...state, searchNum: 0, query: ""})),
);

export function resultsReducer(state, action){
    return _resultsReducer(state, action);
}