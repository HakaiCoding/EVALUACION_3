import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appdirectivaLi]'
})
export class directivaLi {
  constructor(private el:ElementRef, private renderer:Renderer2) {
    renderer.setStyle(el.nativeElement, 'font-style','italic');
    }
}

@Directive({
  selector: '[appmarkTarget]'
})
export class markTarget {
  constructor(private el:ElementRef, private renderer:Renderer2) {
    renderer.setStyle(el.nativeElement, 'text-decoration-line', 'underline');
    }
}



