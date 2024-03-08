// review javascript 
interface User {
    name: string,
    id: number
}



class UserAccount {
    name: string;
    id: number

    constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
    }
}

// unions used to declare different values 

type Mybool = true | false
type windowStates = 'opens' | 'closed' | 'minimized'
type  lockState = "locked" | 'unlocked'

// you can even define an function that takes string and array
const getLength = (obj: string | string[]) => {
    if (typeof obj === 'string'){
        return [obj]
    }
    return obj
}
console.log(getLength(['yvan', 'yvan', 'yvan']));

// Generics provide variables to types.An array without generics could contain anything. An array with generics can describe the values that the array contains

type StringArray = Array<string> // this mean that this array will contain only string. 
type NumberArray = Array<number> // this mean that this array will contain only number.
type ObjectWithNameArray = Array<{name: string}> // this will return an object with the name but has the type of string

// YOU CAN DECLARE YOUR OWN TYPE USING GENERIC

interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;    
}
// declare const backpack : Backpack<string>
// const object = backpack.get();

// STRUCTURE TYPE  SYSTEM : if two objects have the same shape, they are considered to be of the same type.

interface Point {
    x: number,
    y: number,
}

const logPoint = (p: Point) => {
    console.log(`${p.x}, ${p.y}`)
}

const point  = {x: 12, y: 23}
logPoint(point)

// NARROWING: the process of refining types to more specific types than declared

// const padLeft = (padding: number | string, input: string): string => {
  // we are going to implement when the padding equal to number adding to the input 
//   if (typeof padding === 'number') {
//     return "".repeat(padding) + input;
//   }
//   return padding + input
// }

// TypeScript 

interface Assignment {
    studentId : string,
    title: string,
    grade: number,
    verified?: boolean
}

const updateAssignment  = ( assign: Assignment, propsUpdate: Partial<Assignment>): Assignment => {
    return{...assign, ...propsUpdate}
}

const assign1: Assignment = {
    studentId:'Yvan_30303',
    title: 'English',
    grade: 0
}
console.log(updateAssignment(assign1, {grade: 97}));

// generic

function identity<T>(arg: T): T {
    return arg;
}

// Usage
let result1 = identity<number>(42);  // Type of result1 is number
let result2 = identity<string>('hello');  // Type of result2 is string

