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

  ngOnInit(): void {
    this.api.topHeadlines().subscribe((result) => {
      console.log(result);
      this.topHeadlinesData = result.articles;
    });
  }
}
