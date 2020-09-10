import { Base } from './base.model';
export class AddBase {
  static readonly type = '[BASE] Add';
  constructor( public payload: Base ) {}
}
export class RemoveBase {
  static readonly type = '[BASE] Remove';
  constructor( public payload: string ) {}
}