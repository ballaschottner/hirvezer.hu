import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/service/newsapi.service';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.css'],
})
export class TopNewsComponent implements OnInit {
  constructor(private api: NewsapiService) {}
  topHeadlinesData: any[] = [];
  hvgData: any[] = [];
  mergedNews: any[] = [];
  newsApiData: any[] = [];

  ngOnInit(): void {
    this.api.ZaolNews().subscribe((result) => {
      console.log(result.items);
      this.topHeadlinesData = result.items;
      this.mergedNews.push(...result.items);
    });

    this.api.hvgNews().subscribe((hvgresult) => {
      console.log('HVG:', hvgresult.items);
      this.hvgData = hvgresult.items;
      this.mergedNews.push(...hvgresult.items);
    });

    this.api.newsApi().subscribe((newsresult) => {
      console.log('NewsAPI:', newsresult.articles);
      this.newsApiData = newsresult.items;
    });

    const result = this.mergedNews.sort(function (a, b) {
      if (a.pubDate < b.pubDate) {
        return -1;
      }
      if (a.pubDate > b.pubDate) {
        return 1;
      }
      return 0;
    });
    console.log('mergedSort', result);

    /*     const sliceResult = this.mergedNews.slice(25);
     */
    /*     console.log('merged pubDate', this.mergedNews.pubDate);
     */
    /* console.log('mergedNews:', this.mergedNews);
    console.log('mergedSorted:', result);
    console.log('mergedSliced:', sliceResult); */
  }
}
