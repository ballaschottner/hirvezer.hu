import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsapiService {
  constructor(private http: HttpClient) {}
  APIKey = '21c5c042847d414d89dd8ad24744d877';
  topNews =
    'https://newsapi.org/v2/top-headlines?country=hu&apiKey=' + this.APIKey;

  topHeadlines(): Observable<any> {
    return this.http.get(this.topNews);
  }
}
