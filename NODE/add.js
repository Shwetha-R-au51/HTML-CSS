//const add = (a,b) => {
//    return (a+b);
//};
//const sum = add(3, 4);
//console.log(sum);

const add = (a,b) =>{
    return a+b;
};
module.exports = add;



//2nd pattern

module.exports = (a,b) => {
    return a+b;
};


//3rd pattern
const add = (a,b) => {
    return a+b;
};
const substract = (a,b) =>{
    return a+b;
};
module.exports = {
    add,
    substract,
};
