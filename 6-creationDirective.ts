/*
@Input a été ajouté.Il permet de récupérer notre couleur passée en paramètre de notre directive.
@HostListener ont été ajoutés pour permettre le changement de couleur.

ElementRef est injecté dans le constructeur par Angular afin de récupérer l'élement du DOM dans notre classe.
Grace à l'injection de Renderer2, il est possible de modifier le style de l'élement.

Appeler cette directive comme ceci : <div appHighlight highlightColor="yellow">Texte en highlight</div>
*/
import {Directive, Renderer, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
 
  @Input() highlightColor: string;

  private _defaultColor = 'red';

  constructor(private _el: ElementRef, private _renderer: Renderer2) {
    this._renderer.setElementStyle(this._el.nativeElement, 'color', this._defaultColor);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this._renderer.setElementStyle(this._el.nativeElement, 'color', this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._renderer.setElementStyle(this._el.nativeElement, 'color', this._defaultColor);
  }


}
