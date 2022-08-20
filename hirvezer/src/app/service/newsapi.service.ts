import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsapiService {
  constructor(private http: HttpClient) {}
  APIKey = '21c5c042847d414d89dd8ad24744d877';
  RSSAPi = '8b6960ff147386bf9878f148c7318047';
  newsAPI =
    'https://newsapi.org/v2/everything?q=hungary&from=2022-07-20&sortBy=publishedAt&apiKey=' +
    this.APIKey;
  ZaolRSS =
    'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.zaol.hu%2Fpublicapi%2Fhu%2Frss%2Fzaol%2Farticles&api_key=un9axjpfquykmpkwy4rn1nz4lcho4uktdvcohhym&order_by=pubDate&count=100';
  HVGNews =
    ' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fhvg.hu%2Frss&api_key=un9axjpfquykmpkwy4rn1nz4lcho4uktdvcohhym&order_by=pubDate&count=100';

  newsApi(): Observable<any> {
    return this.http.get(this.newsAPI);
  }

  ZaolNews(): Observable<any> {
    return this.http.get(this.ZaolRSS);
  }

  hvgNews(): Observable<any> {
    return this.http.get(this.HVGNews);
  }

  /* customRSSPOC() {
    const requestOptions: Object = {
      observe: 'body',
      responseType: 'text',
    };
    this.http
      .get<any>('https://gadgets.ndtv.com/rss/feeds', requestOptions)
      .subscribe((data) => {
        let parseString = xml2js.parseString;
        parseString(data, (err, result: NewsRss) => {
          this.RssData = result;
        });
      });
  } */
}
