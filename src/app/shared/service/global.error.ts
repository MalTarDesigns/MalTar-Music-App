import { ErrorHandler, Injectable, Inject, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import * as fromActions from '../../store/actions';
import { AppState } from '../../store';
import { Store } from '@ngrx/store';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(@Inject(Injector) private injector: Injector) {}

  private get store(): Store<any> {
    return this.injector.get(Store);
  }

  handleError(error: Error | HttpErrorResponse) {
    this.store.dispatch(new fromActions.EffectError({ error }));
    if (error instanceof HttpErrorResponse) {
      // Server or connection error happened
      if (!navigator.onLine) {
        console.info(`Network is offline ${error.message}`);
        throw `Network is offline ${error.message}`;
      } else {
        // Handle Http Error (error.status === 403, 404...)
        console.error(`Http Error occured due to ${error.status}`);
        throw `Http Error occured due to ${error.message}`;
      }
    } else {
      // Handle Client Error (Angular Error, ReferenceError...)
      console.error(`Error occured: ${error.message}`);
      throw `Error occured: ${error.message}`;
    }
  }
}
