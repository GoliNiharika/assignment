import { Post } from './cards.model';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { Router } from "@angular/router";
import { map } from 'rxjs/operators';

@Injectable({providedIn: "root"})
export class CardsService {
  private posts: Post[] = [];
  private postsUpdated=new Subject<Post[]>();

  constructor(private http: HttpClient, private router: Router) {}



  getPosts() {

    this.http
      .get<{ message: string; posts: any }>(
        "http://localhost:3000/api/posts"
      )
      .pipe(map((postData) => {
        return postData.posts.map(post => {
          return {
                title : post.title,
                content : post.content,
                id: post._id
          };
        });

      }))
      .subscribe(tPost => {
        console.log(tPost);
        this.posts = tPost;
        this.postsUpdated.next([...this.posts]);

      });
  }

  getPostsUpdateListener(){
    return this.postsUpdated.asObservable();
  }

  getPost(){
   return this.posts;
  }

  updatePost(id: string, title:string, content: string){
    let postData: Post ;
        postData = {
          id: id,
          title: title,
          content: content,
        };
        console.log(postData)
    this.http.put("http://localhost:3000/api/posts/"+id,postData)
    .subscribe(response => {

        console.log("SSSSll");
        this.router.navigate(["/"]);

    });
  }
}
