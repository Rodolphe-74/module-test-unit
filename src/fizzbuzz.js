export function fizzBuzz(n) {
    if(n%15 === 0){
        return 'fizzbuzz'
    }
    else if(n%3 === 0){
        return 'fizz'
    }
    else if(n%5 === 0){
        return 'buzz'
    }
    else if((n+'').indexOf('3') > -1 && (n+'').indexOf('5') > -1){
        return 'fizzbuzz'
    }
    else if((n+'').indexOf('3') > -1){
        return 'fizz'
    }
    else if((n+'').indexOf('5') > -1){
        return 'buzz'
    }
    else{
        return n
    }
}
