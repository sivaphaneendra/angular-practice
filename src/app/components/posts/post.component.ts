import { Component } from '@angular/core';
import { PostsService } from '../../Services/posts.service';

@Component({
    selector: 'post',
    moduleId: module.id,
    templateUrl: 'post.component.html',
    providers: [PostsService]
})

export class PostComponent{
    posts: Post[];
    showPost:boolean;

    constructor(private postsService:PostsService) {      
      this.showPost = false;
  }

  showPosts = function(){
      this.postsService.getPosts().subscribe((response:any) =>{
        this.posts = response;
        this.showPost = true;
      });
  }
}

interface Post{
    id:number;
    title:string;
    body:string;
}