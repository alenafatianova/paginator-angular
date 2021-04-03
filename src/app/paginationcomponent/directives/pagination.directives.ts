import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Directive({
  selector: '[appPaginator]',
  exportAs: 'paginator',
})
export class PaginatorDirective implements OnInit {

  @Input() totalCount!: number;
  @Input() currentPage: number = 1
  @Output() onPageChange = new EventEmitter<number>()
  constructor() {}

  ngOnInit(): void {}

  private setPage(pageNumber: number) {
    this.currentPage = pageNumber;

  }
  previousPage() {
    this.setPage(Math.max(1, this.currentPage - 1));
    console.log(this.currentPage)
  }
  nextPage() {
    this.setPage(Math.min(this.totalCount, this.currentPage + 1));
    console.log(this.currentPage)
  }
  get isPageFirst(): boolean {
    return this.currentPage === 1
  }
  get isPageLast(): boolean {
    return this.currentPage === this.totalCount
  }

}
