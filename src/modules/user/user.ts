import { Address } from './address';

export class User {
  public name: string;
  public age: number;
  public address: Address;

  constructor() {
    this.name = '';
    this.age = 18;
    this.address = new Address();
  }
}
