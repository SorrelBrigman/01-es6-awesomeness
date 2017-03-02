#!/usr/bin/env node


// create a function
const cheer = (name) => {
// that performs a cheer
  //take the value passed into the function and set it to uppercase
  let cheerCaps = name.toUpperCase();
  //take the now uppercase string and turn it to an array
  let cheerArray = Array.from(cheerCaps);
// logged to the console/terminal
  for(var i = 0; i < cheerArray.length; i++) {
    let thisLetter = cheerArray[i];
    if(cheerArray[i] === "A" | "E" | "I" | "O" | "U") {
      //delay by one second
      //for each index value, multiple it by one second to get a staggerd
      //one second delay for each interation through the loop
      setTimeout(()=>console.log(`Give me an ${thisLetter}`), (1000 * i));
      } else if(cheerArray[i]=== " ") {

      } else {
       setTimeout(()=>console.log(`Give me a ${thisLetter}`), (1000 * i));
      }
    }
    setTimeout(()=>console.log(`What's that spell?`), (1000 * (cheerArray.length + 1)));
    setTimeout(()=>console.log(`${cheerCaps}!`), (1000 * (cheerArray.length + 2)));
    // console.log(`${cheerCaps}!`);
  }



// cheer("Bob Ross");


//attempting example solution presented in class.


let first = "Helen";
let last = "Keller";
const name = {first, last};

console.log(name);
const nodeCheer = ({first, last}) => {
  let name = `${first} ${last}`.toUpperCase();
  [...first, ...last].forEach((letter, index)=>setTimeout(testLetter, (1000 * index), letter));
  setTimeout(()=>console.log("What's that spell?"), ((name.length-1) * 1000));
  setTimeout(()=>console.log(`${name}!`), ((name.length) * 1000));
};


const testLetter = (letter) => {
    let conjunction ="aeiofhlmnrsx".includes(letter.toLowerCase()) ? "an" : "a";
    console.log(`Gimme ${conjunction} ${letter.toUpperCase()}!`);
};

nodeCheer(name);
