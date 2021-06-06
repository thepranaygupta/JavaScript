var user = {
    firstName: "Pranay",
    lastName: "Gupta",
    role: "Procrastinator",
    loginCount: 69,
    facebookSignedIn: true,
};

console.log(user.firstName);
console.log(user["lastName"]); // boomer way

console.log(user.loginCount);
user.loginCount = 44;   //updation
console.log(user.loginCount);

console.log(user);  // boomer way
console.table(user); // pro way
