let greet: Function;

greet = () => {
    console.log("hello, world");
}

const add = (a: number, b: number, c: number | string = 0) => {
   
        console.log(a + b);
        console.log(c);
}

add(5,10, 3);

const minus = (a: number, b: number): number => {
    return a-b;
}

let result = minus(10,7);
console.log(result);