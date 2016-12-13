import { invert } from '../utils/invert-color';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';


const DEFAULT_BG_COLOR = 'black',
    DEFAULT_HIGHLIGHT_SELECT_CLASS = 'highlight-item-selected';
@Directive({
    selector: '[hightlight-item]'
})
export class HighlightItemDirective {
    private _bgColor: string;
    private _highlightSelectClass: string;

    public element: ElementRef;

    constructor(element: ElementRef) {
        this.element = element;
    }

    @Input('hightlight-select-class') set highlightSelectClass(className: string) {
        this._highlightSelectClass = className;
    }

    get highlightSelectClass(): string {
        return this._highlightSelectClass || DEFAULT_HIGHLIGHT_SELECT_CLASS;
    }

    @Input('hightlight-color') set bgColor(bgColor: string) {
        this._bgColor = bgColor;
    }

    get bgColor(): string {
        return this._bgColor || DEFAULT_BG_COLOR;
    }

    get fontColor(): string {
        let invertedColor = invert(this.bgColor);
        return invertedColor.toString();
    }

    @HostListener('click') onItemClick() {
        let oldElement = document.getElementsByClassName(this.highlightSelectClass)[0];
        if (oldElement) {
            oldElement.classList.remove(this.highlightSelectClass);
            oldElement.parentElement.style.color = '';
            oldElement.parentElement.style.background = '';
        }

        this.element.nativeElement.classList.add(this.highlightSelectClass);
        this.element.nativeElement.parentElement.style.color = this.fontColor;
        this.element.nativeElement.parentElement.style.background = this.bgColor;
    }
};
