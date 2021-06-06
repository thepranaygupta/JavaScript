var isEven = (element) => {
    //   if (element % 2 === 0) {
    //     return true;
    //   }
    //   return false;

    return element % 2 === 0;
};


var result = [2, 4, 6, 8].every(isEven); // every runs the operation through every element in the array
// also note that the value of isEven is passed by reference
console.log(result);

var result = [2, 3, 6, 8].every((e) => (e % 2 === 0));
console.log(result);
