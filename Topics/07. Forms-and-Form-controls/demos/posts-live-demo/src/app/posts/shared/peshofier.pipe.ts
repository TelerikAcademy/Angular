import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'peshofier' })
export class PeshofierPipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        return 'Pesho';
    }
}
