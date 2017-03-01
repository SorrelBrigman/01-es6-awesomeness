// create a function
const cheer = (name) => {
// that performs a cheer
  //take the value passed into the function and set it to uppercase
  let cheerCaps = name.toUpperCase();
  //take the now uppercase string and turn it to an array
  let cheerArray = Array.from(cheerCaps);
// logged to the console/terminal
  for(var i=0; i < cheerArray.length; i++) {
// account for a/an
  if(cheerArray[i] === "A" | "E" | "I" | "O" | "U") {
    console.log(`Give me an ${cheerArray[i]}`);
    } else {
      console.log(`Give me a ${cheerArray[i]}`);
    }
    console.log(`What's that spell?`);
    } // end of for loop
    console.log(`${cheerCaps}!`);
  }


// with the argument passed to it
// delay the logs by 1 second.


cheer("Bob");
