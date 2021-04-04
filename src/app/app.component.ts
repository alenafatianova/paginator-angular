import { Component } from '@angular/core';

export interface ItemsType  {
  id: string
  author: string
  width: number
  height: number
  url: string
  download_url: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  items: ItemsType[] = []

}
