import { SuperheroesService } from './../../services/superheroes.service';
import { Superhero } from '../../models/superhero.model';
import { Component, OnInit } from '@angular/core';

const DEFAULT_SUPERHERO_IMG = 'http://image.freepik.com/free-vector/comic-superhero-chest-illustration_23-2147501841.jpg';

@Component({
    moduleId: module.id,
    selector: 'superheroes',
    templateUrl: './superheroes.component.html',
    styleUrls: [
        './superheroes.component.css'
    ]
})
export class SuperheroesComponent implements OnInit {
    model: Superhero;
    superheroes: Superhero[];

    constructor(private superheroesService: SuperheroesService) { }

    ngOnInit() {
        this.model = new Superhero('', '', '');
        this.superheroes = this.superheroesService.getAll()
            .map(sh => {
                sh.img = (sh.img || DEFAULT_SUPERHERO_IMG);
                return sh;
            });
    }

    create(superhero: Superhero) {
        superhero.img = superhero.img || DEFAULT_SUPERHERO_IMG;
        this.superheroes.push(superhero);
    }
};
