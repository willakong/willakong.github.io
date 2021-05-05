import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { FormBody } from '../../models/FormBody';

const formUrl = 'https://formspree.io/f/xzbkvodz';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  public submitForm(formData: FormBody): Observable<any> {
    return this.http.post(formUrl, formData);
  }
}
