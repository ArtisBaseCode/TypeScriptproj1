import { Invoice } from "./models/invoice.js";
import { Payment } from "./models/payment.js";
import { ListTemplates } from "./models/listTemplates";
let docOne;
let docTwo;
docOne = new Invoice("Arianit", "Web Work", 1000);
docTwo = new Payment("leona", "Flutter Work", 1500);
let docs = [];
docs.push(docOne, docTwo);
console.log(docs);
const me = {
    name: "Artis",
    age: 21,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent 0', amount);
        return amount;
    },
};
const greetPerson = (p) => {
    console.log('Hello ', p.name);
};
greetPerson(me);
const anchor = document.querySelector('a');
console.log(anchor === null || anchor === void 0 ? void 0 : anchor.href);
// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template
const ul = document.querySelector('ul');
const list = new ListTemplates(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// Classes
const invOne = new Invoice('Artis', 'Work on Artis Website', 400);
const invTwo = new Invoice('Labi', 'Work on Labi Website', 500);
let invoices = [];
invoices.push(invOne, invTwo);
// console.log(invoices);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.details, inv.format());
});
