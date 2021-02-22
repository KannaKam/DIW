import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})

export class ArticlesComponent implements OnInit {

  /**
   * Array of clothing items objects
   */
  public articles: object = [
    {
      name: 'Shirt',
      brand: 'Zara',
      size: 'M',
      price: '$19.99',
      img: "https://static.zara.net/photos///2020/I/0/1/p/7446/307/445/2/w/460/7446307445_2_1_1.jpg?ts=1601626603699",
      flag: false
    },
    {
      name: 'Trousers',
      brand: 'Pull & Bear',
      size: 'XS',
      price: '$49.99',
      img: "https://static.zara.net/photos///2020/I/0/2/p/9632/308/800/2/w/460/9632308800_2_1_1.jpg?ts=1602682043838",
      flag: false
    },
    {
      name: 'Cap',
      brand: 'Pike Coast',
      size: 'L',
      price: '$8.99',
      img: "https://static.zara.net/photos///2020/I/0/2/p/9065/336/800/2/w/1140/9065336800_1_1_1.jpg?ts=1599810052498",
      flag: false
    },
    {
      name: 'Sweatshirt',
      brand: 'H & M',
      size: 'M',
      price: '$39.99',
      img: "https://static.zara.net/photos///2020/I/0/2/p/4770/305/537/2/w/872/4770305537_1_1_1.jpg?ts=1601288243495",
      flag: false
    }
  ];

  constructor() { };

  ngOnInit(): void {

  };

};
