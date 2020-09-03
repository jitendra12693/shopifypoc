import { HttpHeaders, HttpParams } from '@angular/common/http';

export class BaseService {
  private headers: HttpHeaders;
  private params: HttpParams;

  protected createRequestOption(headers, params) {
    this.headers = new HttpHeaders();
    this.params = new HttpParams();

    for (const key in headers) {
      if (key) {
        this.headers = this.headers.set(key, headers[key]);
      }
    }

    for (const key in params) {
      if (key) {
        this.params = this.params.set(key, params[key]);
      }
    }

    const requestOptions: any = {
      headers: this.headers,
      params: this.params
    };

    return requestOptions;
  }
}
