import { IHttpClient } from '../../../providers/http';
import { SaveUser } from '../services/save-user.service';
import { User } from '../user';
import { SaveAdapterRequest } from '../adapters/save-adapter-request';

const httpMock: IHttpClient = {
  get: async (url: string) => {
    return url;
  },
  post: async (url: string, body: any) => {
    return { url, body };
  },
};
describe('Users tests', () => {
  const user: User = {
    name: 'João Da Luz',
    age: 18,
    address: {
      city: 'Maringá',
      number: '1',
      state: 'PR',
      street: 'Rua das flores',
      zipCode: '86443000',
    },
  };

  it('Should save user on backend', () => {
    const saveUserMock = new SaveUser(httpMock);
    const spy = jest.spyOn(saveUserMock, 'saveUser');
    saveUserMock.saveUser(user);
    expect(spy).toHaveBeenCalled();
  });

  it('Should create user object with expected backend properties ', async () => {
    let currentBody: any = '';

    const httpMockSaveRequestBody: IHttpClient = {
      get: async (url: string) => {
        return url;
      },
      post: async (url: string, body: any) => {
        currentBody = { url, body };
      },
    };
    const saveUserMock = new SaveUser(httpMockSaveRequestBody);
    await saveUserMock.saveUser(user);
    const resultExpected: SaveAdapterRequest = {
      nome: user.name,
      idade: user.age,
      cep: user.address.zipCode,
      estado: user.address.state,
      numero: user.address.number,
      rua: user.address.street,
      cidade: user.address.city,
    };
    expect(currentBody.body).toEqual(resultExpected);
  });

  it('Should get the address from zipcode', () => {});
});
