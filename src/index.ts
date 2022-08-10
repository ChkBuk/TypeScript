let sale = 123_456_789;
let course = 'TypeScript';
let is_published = true;
let level;
//Arrays
let numbers:number[] = [];
numbers[0] = 1;
numbers[1] = 2;

numbers.forEach(n => console.log('===',n.toString()));

//tuples
let user: [number, string] = [1, 'Charith'];
user.push(2,'PQR');
console.log('***',user.slice);



// enum
const enum Size { Small = 1, Medium, Large }
let mySize: Size = Size.Large;
console.log(mySize);

//functions
function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}

console.log(calculateTax(10_000));

//object

// type aliase
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 1,
    name: 'Charith',
    retire: (date: Date) => {
        console.log('======== ', date);

    }
};

console.log(employee.id);

function kgToLbs(weight: number | string): number { // type union

    // type Narrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}

console.log(kgToLbs(10));
console.log(kgToLbs('20kg'));

// type intersection

type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => { },
    resize: () => { }

}

// Literal types (exact, specific)

type Quantity = 50 | 100;
let quantity: Quantity = 100; // only allow 50 or 100. Otherwise, it gives compilation error.

type Metric = 'cm' | 'inch';
let metric: Metric = 'inch'; // only allow cm or inch. Otherwise, it gives compilation error.

// Handle null

function greet(name: string | null | undefined) {
    if (name)
        console.log('Hi ',name.toUpperCase());
    else
        console.log('Hello..!');
}

greet("Charith");
greet(null);
greet(undefined);

//optional chaining

type Customer = {
    birthday?: Date
};

function getCustomer(id:number): Customer | null | undefined {
    return id===0 ? null: {birthday: new Date()};
}
let customer = getCustomer(1);
//optional propety access operator
console.log(customer?.birthday?.getFullYear());

//optional call
let log1: any = null;
log1?.('a');

let log2: any = (message:string)=> console.log(message);
log2?.('a');
