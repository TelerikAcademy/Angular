import { Superhero } from '../models/Superhero';
const superheroes = [
    { name: 'Batman', secretIdentity: 'Bruce Wayne', powers: ['Intelligence', 'Utility belt', 'Martial Arts'] },
    { name: 'The Hulk', secretIdentity: 'Bruce Banner', powers: ['Genius', 'Super strength', 'Invinsible'] },
    { name: 'Dr. Strange', secretIdentity: 'Dr. Stephen Strange', powers: ['Magic', 'Martial Arts'] }
];

const SUPERHEROES = {
    getAll(): Superhero[] {
        return superheroes;
    }
};

export { SUPERHEROES };
