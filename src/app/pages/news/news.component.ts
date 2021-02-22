import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Article } from '../../interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit {

  /**
   * Article array that will store their attributes
   */
  public newsArticles: Article[] = [];
  
  /**
   * Article object for the highlight news
   */
  public articleTitle: string;

  public empty: boolean;

  /**
   * @constructor constructor to declare the newsService class and the router
   * service class
   * @param _newsService class with the getNews method what returns a promise
   * with all the api propierties and information.
   * @param _router class with a navigate method to redirect the user to another view
   */
  constructor(private _newsService: NewsService, private _router: Router) { };

  /**
   * async method that collects the information from news api and saves it
   * in the newsArticle array for local use.
   */
  async ngOnInit() {

    const news = await this._newsService.getNews();

    if (news.status === "ok") {

      this.newsArticles = news.articles

      if (this.newsArticles.length === 0) {

        this.empty = true;

      };

    } else {

      this._router.navigate(['/errors']);

    };

  };

  /**
   * collects the news and assigns it to a public variable
   * @param articleTitle
   */
  highlightNews(articleTitle: string) {

    this.articleTitle = articleTitle;

  };

};
