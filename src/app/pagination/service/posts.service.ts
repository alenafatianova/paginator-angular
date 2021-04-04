import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs';
import { ItemsType } from 'src/app/app.component';


@Injectable({
  providedIn: 'root'
})


export class PostsService {

  constructor(private http: HttpClient) { }

  getItems(pageNumber: number): Observable<Array<ItemsType>> {
    return this.http.get<ItemsType[]>(`https://picsum.photos/v2/list?page=${pageNumber}&limit=8`)
  }
}
