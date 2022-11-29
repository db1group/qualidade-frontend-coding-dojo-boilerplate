import { IHttpClient } from './http';

export class AxiosHttpService implements IHttpClient {
  async get(url: string, config?: any): Promise<any> {
    return '';
  }

  async post(url: string, body: any, config?: any): Promise<any> {
    return '';
  }
}
