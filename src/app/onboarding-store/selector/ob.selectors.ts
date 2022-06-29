import { createFeatureSelector, createSelector } from '@ngrx/store';

import { resultState } from '../reducer/ob.reducer';

export const retrieveData = createFeatureSelector<resultState>('obData');
export const obDataStateSelector = createSelector(retrieveData, (state: resultState) => state?.results);

export const getLoaded = createSelector(retrieveData, (state: resultState) => state?.dataLoaded);




