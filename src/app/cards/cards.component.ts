import { Component, OnInit } from '@angular/core';
import { CardsService } from './cards.service';
import { Post } from '../cards/cards.model';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  posts: Post[]=[];
  constructor(private cardsService: CardsService) {
    this.cardsService.getPosts();
    this.cardsService.getPostsUpdateListener()
    .subscribe((posts: Post[]) => {

      this.posts = posts;
      console.log(this.posts)
    });
   }

  ngOnInit(): void {

  }

}
