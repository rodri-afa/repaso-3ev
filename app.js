

function prueba(argumento){
    return argumento;
}
function prueba2(arg){
    return 'hola mundo';
}
function fizzbuzz(n){
    if( n%2 ==0){
        if( n%3 == 0){
            console.log('skjdhfgkjashjkfdwa')
            return 'fizzbuzz';
        }else{
            return 'fizz';
        }
    }
    if( n%3 == 0){
        return 'buzz';
    }
    
    return n;
}

module.exports = {prueba, prueba2, fizzbuzz};