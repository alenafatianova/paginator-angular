import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PostsType } from '../app.component';
import { PostsService } from './service/posts.service';


@Component({
  selector: 'app-paginationcomponent',
  templateUrl: './paginationcomponent.component.html',
  styleUrls: ['./paginationcomponent.component.scss'],
})


export class PaginationComponent implements OnInit {

  @Input() posts: PostsType[] = []

  constructor(private http: HttpClient, private postsService: PostsService) { }

  componTitle='Paginator'

  ngOnInit(): void {
    this.postsService.getPosts(10).subscribe((res) => this.posts = res)
  }

}
