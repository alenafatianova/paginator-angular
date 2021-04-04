import { Directive, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core'

@Directive({
  selector: '[appPaginator]',
  exportAs: 'paginator',
})
export class PaginatorDirective implements OnInit {

  @Input() totalCount!: number;
  @Input() currentPage: number = 1;
  
  @Output() onPageChange = new EventEmitter();

  constructor(private render: Renderer2, private element: ElementRef) {};

  ngOnInit(): void {};

  public setPage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.render.setProperty(this.element.nativeElement, 'value', this.currentPage)
    this.onPageChange.emit(this.currentPage)
  };

  previousPage() {
    this.setPage(Math.max(1, this.currentPage - 1));
  };
  nextPage() {
    this.setPage(Math.min(this.totalCount, this.currentPage + 1));
  };

  get isPageFirst(): boolean {
    return this.currentPage === 1
  };

  get isPageLast(): boolean {
    return this.currentPage === this.totalCount
  };

}
