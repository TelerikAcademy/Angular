import { SuperheroesService } from '../../services/superheroes.service';
import { Superhero } from '../../models/superhero.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'superhero-form',
    templateUrl: './superhero-form.component.html',
    styleUrls: [
        './superhero-form.component.css'
    ]
})
export class SuperheroFormComponent implements OnInit {
    model: Superhero;

    @Output('created') emitter: EventEmitter<Superhero> = new EventEmitter<Superhero>();

    constructor(private superheroesService: SuperheroesService) { }

    ngOnInit() {
        this.model = new Superhero('', '', '');
    }

    create() {
        let superhero = this.superheroesService.create(this.model.name, this.model.secretIdentity, this.model.img);
        this.emitter.emit(superhero);
    }

};
