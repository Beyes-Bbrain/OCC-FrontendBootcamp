// Introduction to Arrays

let superheros = ["Spiderman","Batman","Joker","Superman","Wonder Woman"];

console.log("Hero 1 is",superheros[0]);
console.log("Hero 5 is",superheros[4]);
console.log("Hero 2 is",superheros[1]);

superheros[2] = "Doctor Strange";
;

// Push method (Adding a new value to arrey)
superheros.push("Deadpool");
console.log(superheros)

// Pop method (Removing last value in the array)
superheros.pop()
console.log(superheros)

//Array Iteration 
for (let i = 0; i <=4; i++){
    console.log("Hero",i,"is", superheros[i]);
}

// forEach method

superheros.forEach(function(hero) {
    console.log("Hero is",hero);
});

// Array Methods
console.log("Array length is",superheros.length);
console.log("Value of Wonder Woman is", superheros.indexOf("Wonder Woman"));
console.log("Joined Array:",superheros.join("-"));

let sliceArray = superheros.slice(1,4);
console.log("Sliced Array:",sliceArray);
console.log("Superheros Array:",superheros);

let removedElements = superheros.splice(2,2)

console.log(("Removed Elements:",removedElements));
console.log(("Upadted array:",superheros));