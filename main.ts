import { SConta } from "./src/services/SConta";

let a: Map<number, number>;
a = new Map<number, number>();

console.log(a.get(33) != undefined);
console.log(a.get(33) == undefined);
console.log(a.get(33) === undefined);

