import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[TarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit {
  @Input () TarefaConcluida: boolean;
  constructor(private el: ElementRef) { }
  ngOnInit() {
    if (this.TarefaConcluida) {
      this.el.nativeElement.style.textDecoration = 'line-througth';
    }
  }
}
