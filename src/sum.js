// Implement the sum function here
export function sum(a, b) {

    if(!isNaN(a) && !isNaN(b)) {
        return a + b
    }
    else{
        return 'One or both args are not numbers'
    }
}
