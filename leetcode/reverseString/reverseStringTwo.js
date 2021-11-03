const reverseString = (string) =>{
  let pointerA = 0;
  let pointerB = string.length-1;
  while(pointerA < pointerB) {
      let temp = string[pointerA];
      string[pointerA] = string[pointerB]
      string[pointerB] = temp;
      pointerA++;
      pointerB--
  }
  return string.join('');
}

let string = 'Kodak'
let result = reverseString((string).split(''))
console.log(result);
