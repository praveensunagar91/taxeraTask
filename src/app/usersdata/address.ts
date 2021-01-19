import { geo } from "./geo";
export class address{
  public constructor(
    public street:string,
    public suite:string,
    public city:string,
    public zipcode:string,
    public geo:geo
  ){}
}
