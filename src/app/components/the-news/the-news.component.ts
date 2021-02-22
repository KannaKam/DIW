import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-the-news',
  templateUrl: './the-news.component.html',
  styleUrls: ['./the-news.component.css']
})
export class TheNewsComponent implements OnInit {

  constructor() { };
  /**
   * We bring all the news from the father element
   */
  @Input() newsArticle: Article;

  /**
   * declaration and initialization of the EventEmitter
   */
  @Output() eventEmitter = new EventEmitter();
  
  ngOnInit(): void {

  };

  /**
   * emits to the father the chosen article
   * @param articleTitle 
   */
  onClick(articleTitle: string) {

    this.eventEmitter.emit(articleTitle);

  };

};
