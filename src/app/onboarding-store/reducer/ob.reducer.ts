import { state } from '@angular/animations';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { obActionTypes, loadObDataSuccess, updateObResults } from '../action/ob.actions';
import { obUser, obResults } from 'src/app/onboarding/ob.model';


export interface resultState {
  dataLoaded: boolean,
  results: any
};

export const initiaResultState: resultState = {
  dataLoaded: false,
  results: []
}

export const obReducer = createReducer(
  initiaResultState,
  on(obActionTypes.loadObDataSuccess, (state, action) => {
    return {
      ...state,
      dataLoaded: true,
      results: [action.results]
    };
  }),
  on(obActionTypes.updateObResults, (state, action) => {
    return {
      ...state,
      results: [action.results]
    };
  })  
)
