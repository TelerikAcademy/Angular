import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform {
    transform(items: any[], sortBy?: string) {
        if (sortBy) {
            if (sortBy.startsWith('-')) {
                sortBy = sortBy.substr(1);
                return items.sort(
                    (x, y) =>
                        y[sortBy].toString()
                            .localeCompare(x[sortBy].toString()));
            } else {
                sortBy = sortBy.startsWith('+')
                    ? sortBy.substr(1)
                    : sortBy;
                return items.sort(
                    (x, y) =>
                        x[sortBy].toString()
                            .localeCompare(y[sortBy].toString()));
            }
        } else {
            return items.sort();
        }
    }
};
