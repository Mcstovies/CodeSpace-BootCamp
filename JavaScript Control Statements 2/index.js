let x = 1524
let y = 2345
let z = 3321

function isInIncreasingOrder(x, y, z){
    return x < y && y < z;
}

function isInDecreasingOrder(x, y, z){
    return x > y && y > z;
}

function determineOrder(x, y, z){
    if (isInIncreasingOrder(x, y, z)){
        return "increasing";
    } else if (isInDecreasingOrder(x, y, z)){
        return "decreasing"
    } else {
        return "Neither increasing nor decreasing order";
    }
}

let order = determineOrder(x, y, z);
console.log(order);