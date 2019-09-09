import {choice, remove} from './help';
import fruits from './foods';

var randomFruit = choice(fruits);
console.log(fruits);
console.log(`Id like one ${randomFruit}`);
console.log(`here you go: ${randomFruit}`);
console.log("another please");
remove(fruits, randomFruit);
console.log("we have none left sorry, we have "
 + (fruits.length + 1) + " fruits left")
 console.log(fruits);