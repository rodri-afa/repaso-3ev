const app = require('./app')

describe('comprobación inicial', ()=>{
    test('todo en orden',()=>{
        expect(true).toBe(true);
    })

    test('importar app.js',()=>{
        expect(app.prueba('hola')).toBe('hola');
    })
    test('importar fizzbuzz de app.js',()=>{
        expect(app.fizzbuzz('comprobación')).toBeDefined();
    })
});

describe('funcion fizzbuzz',()=>{
    test('devuelve un número al pasarlo como argumento',()=>{
        expect(app.fizzbuzz(1)).toBe(1)
    });
    test('devuelve fizz con multiplos de 2',()=>{
        expect(app.fizzbuzz(2)).toBe('fizz');
        expect(app.fizzbuzz(4)).toBe('fizz');

    });
    test('devuelve buzz con multiplos de 3',()=>{
        expect(app.fizzbuzz(3)).toBe('buzz');
        expect(app.fizzbuzz(9)).toBe('buzz');
    });
    test('devuelve fizzbuzz con multiplos de 2 y 3',()=>{
        expect(app.fizzbuzz(6)).toBe('fizzbuzz');
        expect(app.fizzbuzz(12)).toBe('fizzbuzz');
        
    });
})