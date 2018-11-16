import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import * as AuthActions from './auth.actions';
import { map, switchMap } from 'rxjs/operators';
import * as firebase from 'firebase';
import { from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class AuthEffects {
    @Effect()
    authSignup = this.actions$.ofType(AuthActions.TRY_SIGNUP)
    .pipe(map((action: AuthActions.TrySignup) => {
        return action.payload;
    }),switchMap((authData: {username: string, password: string}) => {
        return from(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
    }),switchMap(() => {
        return from(firebase.auth().currentUser.getIdToken());
    }),mergeMap((token: string) => {
        return [
            {
                type: AuthActions.SIGNUP
            },
            {
                type: AuthActions.SET_TOKEN,
                payload: token
            }
        ];
    }));

    constructor(private actions$: Actions) {}
}