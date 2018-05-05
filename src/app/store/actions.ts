import { Action } from '@ngrx/store';

export const EFFECT_ERROR = '[Error] Effect Error';

export class EffectError implements Action {
  readonly type = EFFECT_ERROR;

  constructor(public payload: any) {}
}

export type Actions = EffectError;
