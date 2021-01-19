import { address } from "./address";
import { company } from "./company";
export class User{
  public constructor(
    public id:number,
    public name:string,
    public username:string,
    public email:string,
    public address:address,
    public phone:string,
    public website:string,
    public company:company
  ){}
}
