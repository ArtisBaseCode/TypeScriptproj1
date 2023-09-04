import { Invoice } from "./models/invoice.js";
import { Payment } from "./models/payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplates } from "./models/listTemplates";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("Arianit", "Web Work", 1000);
docTwo = new Payment("leona", "Flutter Work", 1500);

let docs: HasFormatter[] = [];
docs.push(docOne, docTwo);

console.log(docs);

//  interfaces
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: "Artis",
    age:21,
    speak(text: string): void{
        console.log(text);
    },
    spend(amount: number): number {
        console.log('I spent 0', amount);
        return amount;
    },
}

const greetPerson = (p: IsPerson) => {
    console.log('Hello ', p.name);
}

greetPerson(me);



const anchor = document.querySelector('a');

console.log(anchor?.href);   

// const form = document.querySelector('form')!;

const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template
const ul = document.querySelector('ul')!;
const list = new ListTemplates(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter; 
    if(type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);

    }else{
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
    
})

// Classes

const invOne = new Invoice('Artis', 'Work on Artis Website', 400);
const invTwo = new Invoice('Labi', 'Work on Labi Website', 500);

let invoices: Invoice[] = [];
invoices.push(invOne, invTwo);
// console.log(invoices);

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.details, inv.format());
});