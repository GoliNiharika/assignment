import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CardsService } from '../cards/cards.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Post } from '../cards/cards.model';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit{


  private postId: string;

  posts: Post[];
  form: FormGroup;

  constructor(public cardsService: CardsService, public route: ActivatedRoute){

   this.posts=this.cardsService.getPost();
     this.postId=this.posts[0].id;

  }
  async ngOnInit(){
    this.form=new FormGroup({
        'title': new FormControl(null,{validators: [ Validators.minLength(3)]
         }),
         'content': new FormControl(null, {
              validators: [ Validators.minLength(3)]
         })
      });
          console.log(this.posts);
          this.form.setValue({
            title:  this.posts[0].title,
            content:  this.posts[0].content
          });
  }

  onSavepost( ){
    if (this.form.invalid){
      return;
    }
      this.cardsService.updatePost(
        this.postId,
        this.form.value.title,
        this.form.value.content
        );

    this.form.patchValue(
     {
        title : "    ",
        content : "     "
      }
    )
    //this.form.reset();
  }
}
