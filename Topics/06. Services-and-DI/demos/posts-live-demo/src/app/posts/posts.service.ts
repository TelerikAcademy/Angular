import { IPost } from './posts.models';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

@Injectable()
export class PostsService {
    private posts: IPost[] = [
        { title: 'Pesho 123123123', body: 'Lorem ipsum'},
        { title: 'Pesho 2', body: 'Lorem ipsum'}
    ];

    constructor(private http: Http) { }

    public getPostsManual(): IPost[] {
        return this.posts;
    }

    public getPostsManualAsync(): Observable<IPost[]> {
        const obsv = Observable.create((observer: Observer<IPost[]>) => {
            observer.next(this.posts);

            observer.complete();

            setTimeout(function() {
                observer.next([
                    { title: 'New collection', body: 'Pesho!'}
                ]);
            }, 2000);
        });

        return obsv;
    }

    public getPosts(): Observable<IPost[]> {
        return this.http
            .get('https://jsonplaceholder.typicode.com/posts')
            .map(x => x.json() as IPost[])
            .map(x => x.splice(0, 5));
    }
}
