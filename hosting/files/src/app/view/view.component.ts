
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../cards/cards.model';
import {CardsService} from '../cards/cards.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit, OnDestroy {
  posts: Post[]=[];

  private postsSub: Subscription;

  constructor(public postsService: CardsService){
  }


  ngOnInit() {
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostsUpdateListener()
      .subscribe((posts: Post[]) => {


        this.posts = posts;
        console.log(this.posts)
      });
  }
  ngOnDestroy(){
    this.postsSub.unsubscribe();

  }

}

