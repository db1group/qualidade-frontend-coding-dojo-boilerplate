import { IHttpClient } from '../../../providers/http';
import { SaveUserAdapter } from '../adapters/save-user-adapter';
import { User } from '../user';

export class SaveUser {
  constructor(private readonly httpService: IHttpClient) {}

  public saveUser(user: User) {
    const userFormatted = new SaveUserAdapter().adapt(user);
    return this.httpService.post("/user", userFormatted);
  }
}
