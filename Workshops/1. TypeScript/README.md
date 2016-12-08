# Workshop: TypeScript

Implement an application for managing Superheroes Universe using TypeScript

# Models

The Superheroes Universe has 4 types of creatures: superheroes, super villains, beasts and regular people.

- Superheroes, super villains and beast can hit with some damage any of the other creatures.
- All 4 creatures can be hit with a given damage, lowering their life, unless they have a specific immunity, i.e. The Hulk is immune to physical damage
- Superheroes and super villains can have pets
  - Pet can be either regular people or beasts
- Superheroes and super villains have powers
  - They can use a power on themselves or on another creature
  - Helpful powers can be used only on creatures with the same alignment as the user, or creatures with Neutral alignment
    - i.e. a Good-alignment-superhero cannot use a helpful power on a Evil-alignment-superhero
  - Destructive powers can be used only on creatures with the opposite alignment as the user, or creatures with Neutral alignment
  - i.e. a Good-alignment-supervillain cannot use a destructive power on a Good-alignment-superhero
- Powers can be destructive and helpful
  - Destructive powers apply damage on target, lower damage on target, etc...
  - Helpful powers restore health, raise damage, etc...

- Use interfaces, classes, class hierarchies and enumerations

# Engine

- Create an engine where the creatures can fight each other
  - If a creature's health becomes 0 or lower, it dies and should be removed from the engine
    - Unless a creature has a `resurrection power` and use it on the dead creature
