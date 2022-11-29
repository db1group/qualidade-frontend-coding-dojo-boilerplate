import { User } from '../user';
import { SaveAdapterRequest } from './save-adapter-request';

export class SaveUserAdapter {
  public adapt(user: User): SaveAdapterRequest {
    return {
      nome: user.name,
      idade: user.age,
      cep: user.address.zipCode,
      estado: user.address.state,
      numero: user.address.number,
      rua: user.address.street,
      cidade: user.address.city,
    };
  }
}
