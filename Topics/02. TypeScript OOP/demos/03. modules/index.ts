import { StringValidator, ZipCodeValidator as Pesho } from './validators';

var validator = new Pesho();
console.log(validator.isAcceptable("1000"));