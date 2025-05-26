function makeCounter(){
    
    let count = 0;
    
    return function(){
        count += 1;
        return count;
    }
}
const counter = makeCounter();
const counter1 = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter1());