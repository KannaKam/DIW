import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-headboard',
  templateUrl: './headboard.component.html',
  styleUrls: ['./headboard.component.css']
})

export class HeadboardComponent implements OnInit {

  constructor() { };
  /**
   * We bring the highlight news from the father element
   */
  @Input() articleTitle: string;

  ngOnInit(): void {

  };

};
