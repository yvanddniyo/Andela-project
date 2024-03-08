
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
    



