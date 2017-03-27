import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    getMany<T>(klass: Function): T[] {
        const key = this.getKey(klass);
        let itemsStr = localStorage.getItem(key) || '[]';
        return JSON.parse(itemsStr);
    }

    add<T>(item: T, klass: Function) {
        let items = this.getMany(klass);
        items.push(item);
        const key = this.getKey(klass);
        let itemsString = JSON.stringify(items);
        localStorage.setItem(key, itemsString);
        return this;
    }

    private getKey(klass: Function): string {
        return klass.name;
    }
}