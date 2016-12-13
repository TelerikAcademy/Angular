import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterByPower'
})
export class FilterByPower implements PipeTransform {
    transform(superheroes: any[], power: string): any[] {
        return superheroes.filter(superhero => superhero.powers.includes(power));
    }
};
