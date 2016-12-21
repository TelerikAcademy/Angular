import { Superhero } from './../models/superhero.model';

import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class SuperheroesService {

    constructor(private dataService: DataService) {
    }

    getAll() {
        return this.dataService.getMany<Superhero>(Superhero);
    }

    create(name: string, secretIdentity: string, img: string) {
        let superhero = new Superhero(name, secretIdentity, img);
        this.dataService.add<Superhero>(superhero, Superhero);
        return superhero;
    }
};
