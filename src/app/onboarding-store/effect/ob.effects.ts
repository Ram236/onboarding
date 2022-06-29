import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import * as obActions from '../action/ob.actions'
import { ObService } from '../../onboarding/ob.service'
import { map } from 'rxjs/internal/operators/map';



@Injectable()
export class ObEffects {


  constructor(private actions$: Actions, private obService: ObService) { }


  loadForms = createEffect(() =>
    this.actions$.pipe(
      ofType(obActions.loadObResults),
      mergeMap(action => this.obService.retrieveData().pipe(
        map(obdata => {        
         return obActions.loadObDataSuccess({ results: obdata.results[0] })
        })
      ))
    ));
}
