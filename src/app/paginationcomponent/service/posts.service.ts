import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { PostsType } from 'src/app/app.component';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(pageNumber: number): Observable<Array<PostsType>> {
    return this.http.get<PostsType[]>(`https://picsum.photos/v2/list?page=${pageNumber}&limit=6`)
  }
}
