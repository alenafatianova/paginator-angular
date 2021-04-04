import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ItemsType } from '../app.component';
import { PostsService } from '../pagination/service/posts.service';


@Component({
  selector: 'app-paginationcomponent',
  templateUrl: './paginationcomponent.component.html',
  styleUrls: ['./paginationcomponent.component.scss'],
})


export class PaginationComponent implements OnInit {

  @Input() items: ItemsType[] = []

  constructor(private http: HttpClient, private postsService: PostsService) { }

  componTitle='Paginator'

  ngOnInit(): void {
    this.getItems(1)
  }
  getItems(pageNumber: number) {
    this.postsService.getItems(pageNumber)
    .subscribe((res) => this.items = res)
  }
  pageChangeHandler(pageNumber: number) {
   this.getItems(pageNumber)
  }

}
