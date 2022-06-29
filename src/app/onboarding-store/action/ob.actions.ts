import { createAction, props } from '@ngrx/store';

export const loadObResults = createAction(
  'Load Data via API'
)

export const loadObDataSuccess = createAction(
  'LoadSuccess',
  props<{ results: any }>()
);

export const obObsFailure = createAction(
  'Failure',
  props<{ error: any }>()
);


export const updateObResults = createAction('Update data', props<{ results: any }>());
export const updateObResultsSuccess = createAction('UpdateSuccess', props<{ results: any }>());
export const updateObResultsFailure = createAction('Update Failure', props<{ error: any }>());





export const obActionTypes = {
  loadObResults,
  loadObDataSuccess,
  obObsFailure,
  updateObResults,
  updateObResultsFailure,
  updateObResultsSuccess
};
