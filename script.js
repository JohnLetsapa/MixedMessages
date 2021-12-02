
let numbers = [1,2,3,4,5,6,7,8,9,10];
let letters = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h', 'i' ];
let comb = ['a1b1', 'a2b2,', 'a3b3', 'a4b4','a5b5', 'a6b6', 'a7b7', 'a8b8']; 

function randElementSelector (arr) {
    let randElement = arr[(Math.floor(Math.random()*arr.length))];
    return randElement;
}  

function randomMessage (arr1, arr2, arr3) {
    let messagePart1 = randElementSelector (arr1);
    let messagePart2 = randElementSelector (arr2);
    let messagePart3 = randElementSelector (arr3);

    return messagePart1 + ' ' + messagePart2 + ' ' + messagePart3; 
}

console.log(randomMessage(comb, letters, numbers));
















