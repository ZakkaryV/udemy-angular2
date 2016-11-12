import { Component, Input } from 'angular2/core';

@Component({
    selector: 'star-component',
    template: ` 
                <i
                    class="glyphicon"
                    [class.glyphicon-star-empty]="!isFavorite"
                    [class.glyphicon-star]="isFavorite"
                    (click)="onClick()">

                </i>

              `,
    inputs: ['isFavorite']
})

export class StarComponent { 
    @Input() isFavorite = false;

    onClick() {
            this.isFavorite = !this.isFavorite;
    }
}