export class Address {
  public zipCode: string;
  public street: string;
  public number: string;
  public state: string;
  public city: string;

  constructor(addressInput: any = {}) {
    this.zipCode = addressInput.zipCode;
    this.street = addressInput.street;
    this.number = addressInput.number;
    this.state = addressInput.state;
    this.city = addressInput.city;
  }
}
