import { Component }          from 'angular2/core';
import { CoursesComponent }   from './courses.component';
import { AuthorsComponent }   from './authors.component';
import { StarComponent }      from './star.component';

@Component({
    selector: 'my-app',
    template: ` <h1>My First Angular 2 App</h1>
                <courses></courses>
                <authors></authors>
                <input type="text" [value]="title" (input)="title = $event.target.value">
                <input type="button" (click)="title = ''" value="clear" />
                Preview: {{ title }}
                <star-component [isFavorite]="post.isFavorite"></star-component>`,
    directives: [ CoursesComponent,
                  AuthorsComponent,
                  StarComponent ]
})

export class AppComponent {
    post = {
        title: "Title",
        isFavorite: true
    }

 }