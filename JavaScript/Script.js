
//slice() = ( "Returns a shallow copy of a porti on of an array into a new array.")

// splice() = ("change the contents of an array by removing, replaicng, or adding elements.")


let myNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8]

let myNewNumbers = myNumbers.splice(0, 4, "something to see")

document.write(myNumbers  + "<br>");

document.write(myNewNumbers)
