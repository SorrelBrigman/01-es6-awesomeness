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



// with the argument passed to it
// delay the logs by 1 second.



// account for a/an
 // end of for loop




cheer("Bob Ross");
