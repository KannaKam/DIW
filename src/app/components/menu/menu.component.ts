import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  /**
   * Array with the paths and the names of the menu links
   */
  public menuItems:Object = [
    {
      name: 'Start',
      path: 'start'
    },
    {
      name: 'News',
      path: 'news'
    },
    {
      name: 'Articles',
      path: 'articles'
    },
    {
      name: 'Suggestions',
      path: 'suggestions'
    }
  ];

  constructor() { };

  ngOnInit(): void {

  };

};
