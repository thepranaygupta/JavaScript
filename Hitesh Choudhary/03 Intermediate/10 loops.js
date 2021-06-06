const myStates = [
    "Rajasthan",
    "Delhi",
    "Assam",
    1947,
    "Tamil Nadu",
    "Maharashtra",
];

for (let i = 0; i < myStates.length; i++) {
    if (typeof myStates[i] !== "string") break;
    console.log(myStates[i]);
}