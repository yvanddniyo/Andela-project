
const getArray = <T>(inps: T[]) => {
    return inps[0]
}

const numbers = [1, 3, 4, 5]
const resultNum = getArray(numbers);

const strings = ['hdb', 'ssd']
const resultStr = getArray(strings);
console.log(resultNum);
console.log(resultStr);


interface ApiResponse<data>{
    data: data,
    isError: boolean
}
type userRes = ApiResponse <{name: string, age: number}>

const response:userRes = {
     data: {
        name: 'ke',
        age: 23
     },
    isError: false
  }

// the identify function return anything that passed in 

 const identify = (arg: number): number => {
    return arg; // return only number coz we added the number in the as argument and specify what might return.
 }

 /* In the Generic we have a good way to implement where we can instead pass every type and return value corresponding to the value we have passed.*/

 /* Generic function is the function that can work on the range of different input type for example numbers, strings and etc ...*/

 const ExampleGeneric = <Type>(arg: Type): Type => {
    return arg
 }
 
 /* there's a two way to call generic function  examples*/
 // 1st

 let output  = ExampleGeneric<string>("myStuff") // here i explicity says that output be a string.

//  2nd

let output2 = ExampleGeneric(false) // here we can pass whatever type data we want and return a data corresponding to types of the data.

  const num = ["f", "f", true, 20]
  console.log(ExampleGeneric(num))

  // Working with Generic Type Variables

  const loggingIdent = <Type>(arg: Type[]): Type[] => {
    console.log(arg.length);
    return arg;
  }// Here we specifies that this function will return the length of the array of the each call. takes a type parameter Type, and an argument arg which is an array of Types, and returns an array of Types.
  
 /*We can modify above function by doing the followings */

 const loggingIdents = <Type>(arg: Array<Type>): Array<Type> => {
   console.log(arg.length);
   return arg
 }

 console.log(loggingIdents([1,2,3,4]));

 /* Generic Type */

 const myIdentity = <Type>(arg: Type) : Type => {
  return arg;
 }  
 
 let myIdentitys : <Type>(arg: Type) => Type = myIdentity // we can use this as the myIdentitys

 let myIdentites : {<Type>(arg: Type):Type} = myIdentity // you can use this method to assign this also.
 
 /*  Above example lead us to write our firs Generic Interface.*/

 interface GenericIdentifyFn {
    <Type>(arg: Type): Type
 }
 const myIdentity2 = <Type>(arg: Type) : Type => {
    return arg;
   }  
 let myIdentitys2 : GenericIdentifyFn = myIdentity2

 // we can specify which value that this generic type can attain.

 interface GenericIdentifyFn1<Type> {
    <Type>(arg: Type): Type
 }
 const myIdentity3 = <Type>(arg: Type): Type => {
    return arg
 }

 let myIdentitys3 : GenericIdentifyFn1<number> = myIdentity3

 //GENERIC CLASS

 class GenericNum<NumType> {
    zeroValue:  NumType;
    add: (x: NumType, y: NumType) => NumType
 }

 let myGenericNum = new GenericNum<number>();
 myGenericNum.zeroValue = 0
 myGenericNum.add = function (x,y) {
    return x + y;
 }

 // you can even pass class right there
 let stringNumeric = new GenericNum<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) {
  return x + y;
};

/* Generic Constraints */

interface  LengthWise{
     length: number;
}

const logsIdent = <Type extends LengthWise>(arg: Type) : Type => {
   console.log(arg.length);
    return arg
}

// Using Type Parameters in Generic Constraints

const getProperty = <Type, Key extends keyof Type>(obj: Type, key: Key) => {
    return obj[key]
}
 let x = { a:1, b:3, c:5}

 getProperty(x, "c")