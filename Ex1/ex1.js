const A = [1,2,"a"];
const B = [1,3,"b"];

function filterFunction(value, contextArray){
    return !contextArray.includes(value);
}

const C = B.filter((value) => filterFunction(value, A)).concat(A.filter((value)=> filterFunction(value, B)));

console.log(C);