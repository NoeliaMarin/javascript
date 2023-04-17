const printHello = () => {
    console.log('Hello there');
};

setTimeout(printHello, 3000);
//  en 3 segundos imprime el mensaje Hello there.


const executeAfterDelay = (delay, callbackFunction) => {
    setTimeout(callbackFunction, delay * 1000);
}

executeAfterDelay(5, printHello);

// con esta funcion puedo pedir que imprima el mensaje despues de 5 segundos o los que
// quiera.