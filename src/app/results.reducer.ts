import {createReducer, on} from '@ngrx/store';
import {current, previous, clear} from './results.actions';

export interface State {
    query: string,
    searchNum: number
}

export const initialState: State = {
    query: "",
    searchNum: 0,
};

const _resultsReducer = createReducer(initialState,
    on(current, state => ({...state, searchNum: state.searchNum + 1})),
    on(previous, state => ({...state, searchNum: state.searchNum - 1})),
    on(clear, state => ({...state, searchNum: 0})),
);

export function resultsReducer(state, action){
    return _resultsReducer(state, action);
}